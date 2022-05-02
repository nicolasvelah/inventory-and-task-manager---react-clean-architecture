/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'antd';
import { COLUMNS_TABLE_CATEGORIES } from '../../../../helpers/constants/columns-table-tasks';
import useCategoriesTable from './state/useCategoriesTable';

const TableCatalog: React.FC = () => {
  const { dataTable } = useCategoriesTable();
  return (
    <div>
      <Table
        columns={COLUMNS_TABLE_CATEGORIES}
        dataSource={dataTable}
        scroll={{ x: 1600, y: 450 }}
        pagination={{
          pageSize: 10
        }}
      />
    </div>
  );
};

export default TableCatalog;
