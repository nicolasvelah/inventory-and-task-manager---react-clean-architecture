/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'antd';
import { COLUMNS_TABLE_BOX } from '../../../../helpers/constants/columns-table-tasks';
import useTableBox from './state/useTableBox';

const TableBox: React.FC = () => {
  const {
    dataTable,
    rowSelection,
    actions: { onClickRow }
  } = useTableBox();

  return (
    <div>
      <Table
        columns={COLUMNS_TABLE_BOX}
        rowSelection={rowSelection}
        dataSource={dataTable}
        bordered
        scroll={{ x: 1600, y: 450 }}
        pagination={{
          pageSize: 10
        }}
        onRow={onClickRow as any}
      />
    </div>
  );
};

export default TableBox;
