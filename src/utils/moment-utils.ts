/* eslint-disable import/prefer-default-export */
import moment from 'moment';
import { FORMAT_DEFAULT_DATE, FORMAT_DATE_DAY_MONTH_YEAR } from '../helpers/constants/format-date';

export const localDate = (date: string, format?: string) => {
  return moment.utc(date).format(format ?? FORMAT_DATE_DAY_MONTH_YEAR);
};

export const momentFormat = (date: string, format?: string) => {
  return moment.utc(date).format(format ?? FORMAT_DEFAULT_DATE);
};
