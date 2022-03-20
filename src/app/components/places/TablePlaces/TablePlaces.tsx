/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'antd';

import Place from '../../../../domain/models/place';
import { COLUMNS_TABLE_PLACES } from '../../../../helpers/constants/columns-table-tasks';

const TablePlaces: React.FC<{ places: Place[] }> = ({ places }) => {
  return (
    <div>
      <Table
        columns={COLUMNS_TABLE_PLACES}
        dataSource={places}
        scroll={{ x: 1100 }}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default TablePlaces;
