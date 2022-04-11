import React from 'react';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import { InventoryUncontrolledContextProvider } from '../../../context/inventory/InventoryUncontrolledContext/InventoryUncontrolledContext';
import InventoryUncontrolledContainer from '../../../containers/InventoryUncontrolledContainer/InventoryUncontrolledContainer';

const InventoryPage: React.FC = () => {
  return (
    <MenuLayout menuItem="Materiales-Inventario">
      <InventoryUncontrolledContextProvider>
        <div className="">Materiales/Inventario</div>
        <InventoryUncontrolledContainer />
      </InventoryUncontrolledContextProvider>
    </MenuLayout>
  );
};

export default InventoryPage;
