import React from 'react';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import { BoxContextProvider } from '../../../context/inventory/BoxContext/BoxContext';
import { KeysItemsMenuEnum } from '../../../../helpers/enums/menu-layout-enum';
import BoxContainer from '../../../containers/BoxContainer/BoxContainer';
import './box-page.scss';

const BoxPage: React.FC = () => {
  return (
    <MenuLayout menuItem={KeysItemsMenuEnum.BOX}>
      <BoxContextProvider>
        <div className="box-page">
          Materiales / Cajas
          <BoxContainer />
        </div>
      </BoxContextProvider>
    </MenuLayout>
  );
};

export default BoxPage;
