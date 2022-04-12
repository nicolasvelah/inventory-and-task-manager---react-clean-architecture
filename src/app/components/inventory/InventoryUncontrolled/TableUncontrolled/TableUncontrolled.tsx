/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'antd';
import { COLUMNS_TABLE_UNCONTROLLED } from '../../../../../helpers/constants/columns-table-tasks';
import useTableUncontrolled from './state/useTableUncontrolled';

const TableUncontrolled: React.FC = () => {
  const { dataTable } = useTableUncontrolled();

  return (
    <div>
      <Table
        columns={COLUMNS_TABLE_UNCONTROLLED}
        dataSource={dataTable}
        scroll={{ x: 1600, y: 450 }}
        pagination={{
          pageSize: 10
        }}
      />
    </div>
  );
};

export default TableUncontrolled;
