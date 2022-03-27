/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'antd';
import { COLUMNS_TABLE_CATALOG } from '../../../../helpers/constants/columns-table-tasks';
import useCatalogTable from './state/useCatalogTable';

const TableCatalog: React.FC = () => {
  const { dataTable } = useCatalogTable();

  return (
    <div>
      <Table
        columns={COLUMNS_TABLE_CATALOG}
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
