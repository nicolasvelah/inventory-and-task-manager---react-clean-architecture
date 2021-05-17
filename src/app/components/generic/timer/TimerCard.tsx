/* eslint-disable react/jsx-one-expression-per-line */
import React, { FunctionComponent } from 'react';
import moment from 'moment';
import Timer from 'react-compound-timer';

const formatDate = 'DD/MM/YYYY HH:mm:ss';

const TimerCard: FunctionComponent<{ startDate: string; endDate?: string }> = ({
  startDate,
  endDate
}) => {
  const startDateConverted = moment.utc(moment.utc(startDate).format(formatDate), formatDate);

  if (endDate) {
    const endDateConverted = moment.utc(moment.utc(endDate).format(formatDate), formatDate);
    const diffDates = moment.utc(endDateConverted.diff(startDateConverted));
    const days = endDateConverted.diff(startDateConverted, 'days');

    return (
      <>
        <span>{days} días </span>
        <span>{diffDates.format('HH')}:</span>
        <span>{diffDates.format('mm')}:</span>
        <span>{diffDates.format('ss')} </span>
      </>
    );
  }

  const now = moment.utc(moment().format(formatDate), formatDate);
  const diffDates = moment(now.diff(startDateConverted));

  const days = now.diff(startDateConverted, 'days');

  return (
    <Timer initialTime={diffDates.valueOf()} direction="forward">
      {() => (
        <>
          {days} días <Timer.Hours />:
          <Timer.Minutes />:
          <Timer.Seconds />
        </>
      )}
    </Timer>
  );
};

export default TimerCard;
