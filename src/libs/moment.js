import moment from 'moment';

moment.updateLocale('en', {
  relativeTime : {
    m:  "a min",
    mm: "%d mins"
  }
});

export default moment;
