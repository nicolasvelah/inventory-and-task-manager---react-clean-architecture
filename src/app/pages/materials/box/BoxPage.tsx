import React from 'react';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import { BoxContextProvider } from '../../../context/inventory/BoxContext/BoxContext';
import { KeysItemsMenuEnum } from '../../../../helpers/enums/menu-layout-enum';
import BoxContainer from '../../../containers/BoxContainer/BoxContainer';

const BoxPage: React.FC = () => {
  return (
    <MenuLayout menuItem={KeysItemsMenuEnum.BOX}>
      <BoxContextProvider>
        <div className="">Materiales / Cajas</div>
        <BoxContainer />
      </BoxContextProvider>
    </MenuLayout>
  );
};

export default BoxPage;
