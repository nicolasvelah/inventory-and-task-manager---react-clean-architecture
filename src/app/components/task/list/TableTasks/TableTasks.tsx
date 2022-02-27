/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'antd';

import Task from '../../../../../domain/models/task';
import { columnsTableTasks } from '../../../../../helpers/constants/columns-table-tasks';
import useTasksTable from './state/useTasks';

const TableTasks: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const { dataTable } = useTasksTable(tasks);

  return (
    <div>
      <Table columns={columnsTableTasks} dataSource={dataTable} scroll={{ x: 1100 }} />
    </div>
  );
};

export default TableTasks;
