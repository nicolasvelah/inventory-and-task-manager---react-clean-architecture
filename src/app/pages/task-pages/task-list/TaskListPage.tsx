import React from 'react';
import TaskListContainer from '../../../containers/TaskListContainer/TaskListContainer';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import { TaskListContextProvider } from '../../../context/task/TaskListContext';

import './task-list-page.scss';

const TasksListPage: React.FC = () => {
  return (
    <MenuLayout menuItem="Tareas-Lista">
      <TaskListContextProvider>
        <div className="task-list-page">
          Tarea / Lista
          <TaskListContainer />
        </div>
      </TaskListContextProvider>
    </MenuLayout>
  );
};

export default TasksListPage;
