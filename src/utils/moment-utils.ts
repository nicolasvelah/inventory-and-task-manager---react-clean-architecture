import moment from 'moment';

const formatDate = 'YYYY/MM/DD';

export default {
  localDate: (date: string, format?: string) => moment.utc(date).format(format ?? formatDate)
};
