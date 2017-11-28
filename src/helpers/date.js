import moment from 'moment';

export default function(date) {
  return moment(date).format('ddd, D MMM YYYY [at] h:mm a');
}
