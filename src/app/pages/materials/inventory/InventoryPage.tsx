import React from 'react';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import { InventoryContextProvider } from '../../../context/inventory/InventoryContext/InventoryContext';
import InventoryContainer from '../../../containers/InventoryContainer/InventoryContainer';
import { KeysItemsMenuEnum } from '../../../../helpers/enums/menu-layout-enum';

const Inventory: React.FC = () => {
  return (
    <MenuLayout menuItem={KeysItemsMenuEnum.INVENTORY}>
      <InventoryContextProvider>
        <div className="">Materiales/Inventario</div>
        <InventoryContainer />
      </InventoryContextProvider>
    </MenuLayout>
  );
};

export default Inventory;
