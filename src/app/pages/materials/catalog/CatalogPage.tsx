import React from 'react';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import CatalogContainer from '../../../containers/CatalogContainer/CatalogContainer';
import { CatalogContextProvider } from '../../../context/materials/CatalogContext';

const CatalogPage: React.FC = () => {
  return (
    <MenuLayout menuItem="Materiales-Catalogo">
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
