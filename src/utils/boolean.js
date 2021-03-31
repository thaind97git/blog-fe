export const parseBoolean = val =>
  !val ||
  val === 'false' ||
  val === 'null' ||
  val === 'undefined' ||
  val === '0'
    ? false
    : true;

export default {
  parseBoolean,
};
