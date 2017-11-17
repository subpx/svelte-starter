import moment from 'moment';

export function displayDate(date) {
  return moment(date).format('ddd, D MMM YYYY [at] h:mm a');
}