/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'antd';

import Task from '../../../../../domain/models/task';
import { COLUMNS_TABLE_TASKS, LIMIT_ROWS } from '../../../../../helpers/constants/columns-table-tasks';
import useTasksTable from './state/useTasks';

const TableTasks: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const { dataTable } = useTasksTable(tasks);

  return (
    <div>
      <Table
        columns={COLUMNS_TABLE_TASKS}
        dataSource={dataTable}
        scroll={{ x: 1100 }}
        pagination={{ pageSize: LIMIT_ROWS }}
      />
    </div>
  );
};

export default TableTasks;
