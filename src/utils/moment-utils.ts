/* eslint-disable import/prefer-default-export */
import moment from 'moment';
import {
  FORMAT_DEFAULT_DATE,
  FORMAT_DATE_DAY_MONTH_YEAR,
  FORMAT_DATE_DAY_MONTH_YEAR_TWO
} from '../helpers/constants/format-date';

export const localDate = (date: string, format?: string) => {
  return moment.utc(date).format(format ?? FORMAT_DATE_DAY_MONTH_YEAR);
};

export const momentFormat = (date: string, format?: string) => {
  return moment.utc(date).format(format ?? FORMAT_DEFAULT_DATE);
};

export const rangeDatesToString = (ranges?: { from: string; to: string }) => {
  const from = ranges?.from
    ? moment(ranges.from, FORMAT_DATE_DAY_MONTH_YEAR_TWO).valueOf().toString()
    : new Date().getTime().toString();

  const to = ranges?.to
    ? moment(ranges.to, FORMAT_DATE_DAY_MONTH_YEAR_TWO).valueOf().toString()
    : new Date().getTime().toString();

  return {
    from,
    to
  };
};
