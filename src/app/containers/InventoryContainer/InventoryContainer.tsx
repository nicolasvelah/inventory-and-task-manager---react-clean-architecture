import React from 'react';
import { Button, Space } from 'antd';
import useIventory from './state/useInventory';
import HeaderList from '../../components/generic/header-list/HeaderList';
import TableInventory from '../../components/inventory/Inventory/TableInventory/TableInventory';
import ModalLinkedInventoryTechnical from '../../components/inventory/Inventory/ModalLinkedInventoryTechnical/ModalLinkedInventoryTechnical';

const InventoryContainer: React.FC = () => {
  const {
    activateButton,
    actions: { handleChangeFilters }
  } = useIventory();

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
          {activateButton && <ModalLinkedInventoryTechnical />}
          <Button>Excel</Button>
          <Button>Crear</Button>
        </Space>
      </div>
      <TableInventory />
    </div>
  );
};

export default InventoryContainer;
