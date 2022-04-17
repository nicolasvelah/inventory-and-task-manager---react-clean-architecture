/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'antd';
import { COLUMNS_TABLE_INVENTORY } from '../../../../../helpers/constants/columns-table-tasks';
import useTableInventory from './state/useTableInventory';

const TableInventory: React.FC = () => {
  const { dataTable, rowSelection } = useTableInventory();

  return (
    <div>
      <Table
        columns={COLUMNS_TABLE_INVENTORY}
        rowSelection={rowSelection}
        dataSource={dataTable}
        scroll={{ x: 1600, y: 450 }}
        pagination={{
          pageSize: 10
        }}
      />
    </div>
  );
};

export default TableInventory;
