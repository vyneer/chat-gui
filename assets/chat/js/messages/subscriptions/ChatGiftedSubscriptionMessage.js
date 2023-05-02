import { usernameColorFlair } from '../ChatUserMessage';
import ChatUser from '../../user';
import ChatSubscriptionMessage from './ChatSubscriptionMessage';
import MessageTypes from '../MessageTypes';

export default class ChatGiftedSubscriptionMessage extends ChatSubscriptionMessage {
  constructor(message, user, tier, tierLabel, giftee, timestamp) {
    super(message, user, tier, tierLabel, timestamp);
    this.type = MessageTypes.GIFTSUB;
    this.templateID = '#gift-subscription-template';
    this.giftee = giftee;
  }

  html(chat = null) {
    const { message, classes, attr } = this.buildBaseSubscription(chat);

    attr['data-giftee'] = this.giftee.toLowerCase();

    const gifteeUser =
      chat.users.get(this.giftee.toLowerCase()) ?? new ChatUser(this.giftee);
    const gifteeColorFlair = usernameColorFlair(chat.flairs, gifteeUser);
    const giftee = message.querySelector('.giftee');
    giftee.classList.add(gifteeColorFlair?.name);
    giftee.innerText = gifteeUser.username;

    return this.wrap(message.firstElementChild.innerHTML, classes, attr);
  }
}