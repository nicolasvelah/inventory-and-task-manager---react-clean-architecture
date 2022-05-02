/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'antd';
import { COLUMNS_TABLE_PLACES } from '../../../../helpers/constants/columns-table-tasks';
import usePlacesTable from './state/usePlacesTable';

const TablePlaces: React.FC = () => {
  const { dataTable } = usePlacesTable();

  return (
    <div>
      <Table
        columns={COLUMNS_TABLE_PLACES}
        dataSource={dataTable}
        scroll={{ x: 1100, y: 450 }}
        pagination={{
          pageSize: 10
        }}
      />
    </div>
  );
};

export default TablePlaces;
