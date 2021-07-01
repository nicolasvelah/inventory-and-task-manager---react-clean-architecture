/* eslint-disable import/prefer-default-export */
import moment from 'moment';

const formatDate = 'YYYY/MM/DD';

export const localDate = (date: string, format?: string) => {
  return moment.utc(date).format(format ?? formatDate);
};
