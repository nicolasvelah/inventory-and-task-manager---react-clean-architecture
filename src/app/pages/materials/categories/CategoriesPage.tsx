import React from 'react';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';
import { CategoryContextProvider } from '../../../context/materials/CategoriesContext';
import CategoriesContainer from '../../../containers/CategoriesContainer/CategoriesContainer';
import { KeysItemsMenuEnum } from '../../../../helpers/enums/menu-layout-enum';

const Categories: React.FC = () => {
  return (
    <MenuLayout menuItem={KeysItemsMenuEnum.CATEGORIES}>
      <CategoryContextProvider>
        <div className="">Materiales / Categorias</div>
        <CategoriesContainer />
      </CategoryContextProvider>
    </MenuLayout>
  );
};

export default Categories;
