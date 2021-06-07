import { Button } from 'antd';

import React, { useState } from 'react';

import MenuLayout from '../../../layouts/MenuLayout';
import Task from '../../../../domain/models/task';
import RangeDate from '../../../components/task/list/RangeDate';
import TableTasks from '../../../components/task/list/TableTasks';
import SearchTasks from '../../../components/task/list/SearchTasks';

import './task-list-page.scss';

const TasksListPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchType, setSearchType] = useState<'range' | 'search'>('range');

  const setTaskList = (newTasks: Task[], searchTypeArg: 'range' | 'search') => {
    setSearchType(searchTypeArg);
    setTasks(newTasks);
  };

  return (
    <MenuLayout menuItem="Tareas-Lista">
      <div className="task-list-page">
        Tarea / Lista
        <div className="header">
          <div className="header-first-block">
            <RangeDate setTasks={setTaskList} inUse={searchType === 'range'} />
            <SearchTasks setTasks={setTaskList} inUse={searchType === 'search'} />
          </div>
          <div>
            <Button>Excel</Button>
            <Button>Crear</Button>
          </div>
        </div>
        <TableTasks tasks={tasks} />
      </div>
    </MenuLayout>
  );
};

export default TasksListPage;
