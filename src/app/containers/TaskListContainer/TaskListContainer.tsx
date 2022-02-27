import React from 'react';
import { Button } from 'antd';
import RangeDate from '../../components/task/list/RangeDate';
import TableTasks from '../../components/task/list/TableTasks/TableTasks';
import SearchTasks from '../../components/task/list/SearchTasks';
import useTasks from './state/useTasks';

const TaskListContainer: React.FC = () => {
  const {
    tasks,
    searchType,
    actions: { setTaskList }
  } = useTasks();

  return (
    <div>
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
  );
};

export default TaskListContainer;
