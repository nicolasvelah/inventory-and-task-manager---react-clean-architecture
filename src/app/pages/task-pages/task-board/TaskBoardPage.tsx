import React from 'react';
import { TaskContextProvider } from '../../../context/task/TaskContext';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import TaskBoardContainer from '../../../containers/TaskBoardContainer/TaskBoardContainer';

import './task-board-page.scss';

const TaskBoardPageMain: React.FC = () => {
  return (
    <div className="task-board-page">
      <TaskBoardContainer />
    </div>
  );
};

const TaskBoardPage = () => {
  return (
    <MenuLayout menuItem="Tareas-Tablero">
      <TaskContextProvider>
        <TaskBoardPageMain />
      </TaskContextProvider>
    </MenuLayout>
  );
};

export default TaskBoardPage;
