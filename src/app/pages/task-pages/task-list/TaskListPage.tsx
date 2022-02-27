import React from 'react';
import TaskListContainer from '../../../containers/TaskListContainer/TaskListContainer';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';

import './task-list-page.scss';

const TasksListPage: React.FC = () => {
  return (
    <MenuLayout menuItem="Tareas-Lista">
      <div className="task-list-page">
        Tarea / Lista
        <TaskListContainer />
      </div>
    </MenuLayout>
  );
};

export default TasksListPage;
