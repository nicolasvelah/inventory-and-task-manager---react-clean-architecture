import React from 'react';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import { InventoryUncontrolledContextProvider } from '../../../context/inventory/InventoryUncontrolledContext/InventoryUncontrolledContext';
import InventoryUncontrolledContainer from '../../../containers/InventoryUncontrolledContainer/InventoryUncontrolledContainer';
import { KeysItemsMenuEnum } from '../../../../helpers/enums/menu-layout-enum';

const InventoryUncontrolled: React.FC = () => {
  return (
    <MenuLayout menuItem={KeysItemsMenuEnum.UNCONTROLLED}>
      <InventoryUncontrolledContextProvider>
        <div className="">Materiales/Inventario</div>
        <InventoryUncontrolledContainer />
      </InventoryUncontrolledContextProvider>
    </MenuLayout>
  );
};

export default InventoryUncontrolled;
