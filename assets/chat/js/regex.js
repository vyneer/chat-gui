const regexslashcmd = /^\/([a-z0-9]+)[\s]?/i;
const regextime = /(\d+)([a-z]+)?/gi;
const nickmessageregex = /(?=@?)(\w{3,20})/g;
const nickregex = /^\w{3,20}$/;
const nsfwregex = /\bNSFW\b/i;
const nsflregex = /\bNSFL\b/i;

export {
  regexslashcmd,
  regextime,
  nickmessageregex,
  nickregex,
  nsfwregex,
  nsflregex,
};

export default function makeSafeForRegex(str) {
  return str.trim().replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
