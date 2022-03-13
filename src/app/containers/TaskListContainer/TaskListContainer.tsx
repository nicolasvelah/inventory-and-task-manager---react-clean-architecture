import React from 'react';
import { Button } from 'antd';
import TableTasks from '../../components/task/list/TableTasks/TableTasks';
import CreateTask from '../../components/task/list/CreateTask/CreateTask';
import useTasks from './state/useTasks';
import HeaderList from '../../components/generic/header-list/HeaderList';

const TaskListContainer: React.FC = () => {
  const {
    tasks,
    actions: { handleChangeFilters }
  } = useTasks();

  return (
    <div>
      <div className="header">
        <div className="header-first-block">
          <HeaderList handleChangeFilters={handleChangeFilters} />
        </div>
        <div>
          <Button>Excel</Button>
          <CreateTask />
        </div>
      </div>
      <TableTasks tasks={tasks} />
    </div>
  );
};

export default TaskListContainer;
