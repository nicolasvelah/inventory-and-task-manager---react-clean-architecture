import React, { FunctionComponent } from 'react';
import Task from '../../../../../domain/models/task';
import { taskContext } from '../../../../context/task/TaskContext';
import CardTask from '../card/CardTask';
import StateTaskCount from '../state-task-count/StateTaskCount';

import './column-board.scss';

const ColumnBoard: FunctionComponent<{
  state: 'Por ejecutar' | 'Arrivo' | 'Cerrada';
  tasks: Task[];
}> = ({ state, tasks }) => {
  const { activeTask } = taskContext();

  return (
    <div className="column-board">
      <div className="column-board-header">
        <b>{state}</b>
        <StateTaskCount count={{ late: 1, onTime: 12, total: 1233 }} />
      </div>
      <div className="column-board-body">
        {tasks.map((item) => (
          <CardTask key={item._id} task={item} active={activeTask?._id === item._id} />
        ))}
      </div>
    </div>
  );
};

export default ColumnBoard;
