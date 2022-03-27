/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Pagination, Table } from 'antd';

import { COLUMNS_TABLE_TASKS } from '../../../../../helpers/constants/columns-table-tasks';
import useTasksTable from './state/useTasks';

const TableTasks: React.FC = () => {
  const {
    dataTable,
    filters,
    actions: { onChangePage }
  } = useTasksTable();

  return (
    <div>
      <Table
        columns={COLUMNS_TABLE_TASKS}
        dataSource={dataTable}
        scroll={{ x: 1100, y: 450 }}
        pagination={false}
      />
      <Pagination
        showQuickJumper
        defaultCurrent={1}
        current={filters.currentPage}
        total={filters.total}
        onChange={onChangePage}
        style={{ marginTop: 10 }}
      />
    </div>
  );
};

export default TableTasks;
