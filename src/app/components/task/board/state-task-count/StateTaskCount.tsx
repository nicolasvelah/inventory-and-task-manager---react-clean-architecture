/* eslint-disable no-nested-ternary */
import React, { FunctionComponent } from 'react';

import './state-task-count.scss';

const STATE_TASK_COLORS = {
  late: 'red',
  onTime: 'green',
  total: 'gray'
};

const StateTaskCount: FunctionComponent<{
  count: {
    late: number;
    onTime: number;
    total: number;
  };
}> = ({ count }) => {
  const renderItem = (state: 'late' | 'onTime' | 'total') => (
    <div className="state-task-count-container">
      <span style={{ color: STATE_TASK_COLORS[state] }}>
        {state === 'late' ? 'Tarde' : state === 'onTime' ? 'A tiempo' : 'Total'}
      </span>
      <div style={{ color: STATE_TASK_COLORS[state] }} className="count-container">
        <span>{count[state]}</span>
      </div>
    </div>
  );
  return (
    <div className="state-task-count">
      {renderItem('late')}
      {renderItem('onTime')}
      {renderItem('total')}
    </div>
  );
};

export default StateTaskCount;
