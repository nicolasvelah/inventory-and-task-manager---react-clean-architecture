/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { FunctionComponent } from 'react';
import Task from '../../../../../domain/models/task';
import { taskContext } from '../../../../context/task/TaskContext';

import './card-task.scss';

const CardTask: FunctionComponent<{ task: Task; active: boolean }> = ({ task, active }) => {
  const { setActiveTask } = taskContext();

  const selectTask = () => {
    setActiveTask(task);
  };

  return (
    <div className="card-task" onClick={selectTask}>
      id {task._id} {active ? 'active' : 'no active'}
    </div>
  );
};

export default CardTask;
