import React from 'react';
import { Button, Space } from 'antd';
import useIventoryUncontrolled from './state/useIventoryUncontrolled';
import HeaderList from '../../components/generic/header-list/HeaderList';
import TableUncontrolled from '../../components/inventory/InventoryUncontrolled/TableUncontrolled/TableUncontrolled';

const InventoryUncontrolledContainer: React.FC = () => {
  const {
    actions: { handleChangeFilters }
  } = useIventoryUncontrolled();

  return (
    <div>
      <div className="header">
        <div className="header-first-block">
          <HeaderList
            handleChangeFilters={handleChangeFilters}
            showRangePicker={false}
          />
        </div>
        <Space>
          <Button>Excel</Button>
          <Button>Crear</Button>
        </Space>
      </div>
      <TableUncontrolled />
    </div>
  );
};

export default InventoryUncontrolledContainer;
