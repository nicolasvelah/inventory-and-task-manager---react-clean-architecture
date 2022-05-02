/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'antd';
import { getColumnsWithFilters } from './columns/columns-categories';
import useCategoriesTable from './state/useCategoriesTable';

const TableCatalog: React.FC = () => {
  const { dataTable } = useCategoriesTable();
  return (
    <div>
      <Table
        columns={getColumnsWithFilters()}
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
