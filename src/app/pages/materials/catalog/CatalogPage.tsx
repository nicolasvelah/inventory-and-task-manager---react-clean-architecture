import React from 'react';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import CatalogContainer from '../../../containers/CatalogContainer/CatalogContainer';
import { CatalogContextProvider } from '../../../context/materials/CatalogContext';
import { KeysItemsMenuEnum } from '../../../../helpers/enums/menu-layout-enum';

const CatalogPage: React.FC = () => {
  return (
    <MenuLayout menuItem={KeysItemsMenuEnum.CATALOG}>
      <CatalogContextProvider>
        <div className="">
          Materiales/Catálogo
          <CatalogContainer />
        </div>
      </CatalogContextProvider>
    </MenuLayout>
  );
};

export default CatalogPage;
