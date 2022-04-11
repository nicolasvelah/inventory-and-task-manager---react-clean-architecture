import React from 'react';
import { Button, Space } from 'antd';
import useIventoryUncontrolled from './state/useIventoryUncontrolled';
import HeaderList from '../../components/generic/header-list/HeaderList';

const InventoryUncontrolledContainer: React.FC = () => {
  const {
    actions: { handleChangeFilters }
  } = useIventoryUncontrolled();

  return (
    <div>
      <div className="header">
        <div className="header-first-block">
          <HeaderList handleChangeFilters={handleChangeFilters} />
        </div>
        <Space>
          <Button>Excel</Button>
          <Button>Crear</Button>
        </Space>
      </div>
      <div>TABLA</div>
    </div>
  );
};

export default InventoryUncontrolledContainer;
