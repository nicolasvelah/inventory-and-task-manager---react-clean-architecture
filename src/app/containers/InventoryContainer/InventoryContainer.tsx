import React from 'react';
import { Space } from 'antd';
import useIventory from './state/useInventory';
import HeaderList from '../../components/generic/header-list/HeaderList';
import TableInventory from '../../components/inventory/Inventory/TableInventory/TableInventory';
import ModalLinkedInventoryTechnical from '../../components/inventory/Inventory/ModalLinkedInventoryTechnical/ModalLinkedInventoryTechnical';
import CreateInventory from '../../components/inventory/Inventory/CreateInventory/CreateInventory';
import ExportCsv from '../../components/inventory/ExportCsv/ExportCsv';

const InventoryContainer: React.FC = () => {
  const {
    activateButton,
    actions: { handleChangeFilters }
  } = useIventory();

  return (
    <div>
      <div className="header d-flex">
        <div className="header-first-block">
          <HeaderList
            handleChangeFilters={handleChangeFilters}
            showRangePicker={false}
          />
        </div>
        <div className="m-l-auto">
          <Space>
            {activateButton && <ModalLinkedInventoryTechnical />}
            <ExportCsv />
            <CreateInventory />
          </Space>
        </div>
      </div>
      <TableInventory />
    </div>
  );
};

export default InventoryContainer;
