import React from 'react';
import TaskListContainer from '../../../containers/TaskListContainer/TaskListContainer';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import { TaskListContextProvider } from '../../../context/task/TaskListContext';

import './task-list-page.scss';
import { KeysItemsMenuEnum } from '../../../../helpers/enums/menu-layout-enum';

const TasksListPage: React.FC = () => {
  return (
    <MenuLayout menuItem={KeysItemsMenuEnum.TASK_LIST}>
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
