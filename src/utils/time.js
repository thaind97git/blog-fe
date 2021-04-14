import moment from 'moment';

const DATE_FORMAT = 'MM/DD/YYYY';

const TIME_FORMAT = 'hh:mm:ss A';

const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

const postTimeFormat = time => (time ? moment(time).format('LL') : null);

export default {
  DATE_FORMAT,
  TIME_FORMAT,
  DATE_TIME_FORMAT,
  postTimeFormat,
};
