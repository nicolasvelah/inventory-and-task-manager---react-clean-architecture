/* eslint-disable import/prefer-default-export */
import moment, { Moment } from 'moment';
import { FORMAT_DATE_DAY_MONTH_YEAR_TWO } from './constants/format-date';

const initMonthDate = moment()
  .startOf('month')
  .format(FORMAT_DATE_DAY_MONTH_YEAR_TWO);

const actualDate = moment().format(FORMAT_DATE_DAY_MONTH_YEAR_TWO);

export const defaultDateValue: [Moment, Moment] = [
  moment(initMonthDate, FORMAT_DATE_DAY_MONTH_YEAR_TWO),
  moment(actualDate, FORMAT_DATE_DAY_MONTH_YEAR_TWO)
];
export const defaultDateValueString: [string, string] = [
  moment(initMonthDate, FORMAT_DATE_DAY_MONTH_YEAR_TWO).format(
    FORMAT_DATE_DAY_MONTH_YEAR_TWO
  ),
  moment(actualDate, FORMAT_DATE_DAY_MONTH_YEAR_TWO).format(
    FORMAT_DATE_DAY_MONTH_YEAR_TWO
  )
];
