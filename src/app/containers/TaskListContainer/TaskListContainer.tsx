import React from 'react';
import { Button, Space } from 'antd';
import TableTasks from '../../components/task/list/TableTasks/TableTasks';
import CreateTask from '../../components/task/list/CreateTask/CreateTask';
import useTasks from './state/useTasks';
import HeaderList from '../../components/generic/header-list/HeaderList';
import DrawerDetailTask from '../../components/generic/drawer-detail-task/DrawerDetailTask';

const TaskListContainer: React.FC = () => {
  const {
    visibleDrawer,
    taskSelected,
    actions: { handleChangeFilters, onCloseDrawer }
  } = useTasks();

  return (
    <div>
      <div className="header">
        <div className="header-first-block">
          <HeaderList handleChangeFilters={handleChangeFilters} />
        </div>
        <Space>
          <Button>Excel</Button>
          <CreateTask />
        </Space>
      </div>
      <TableTasks />
      <DrawerDetailTask
        activeTask={taskSelected}
        onCloseDrawer={onCloseDrawer}
        visibleDrawer={visibleDrawer}
      />
    </div>
  );
};

export default TaskListContainer;
