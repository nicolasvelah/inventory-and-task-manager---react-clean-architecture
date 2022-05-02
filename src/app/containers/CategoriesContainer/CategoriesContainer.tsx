import React from 'react';
import useCategories from './state/useCategories';
import HeaderList from '../../components/generic/header-list/HeaderList';
import TableCategories from '../../components/categories/TableCategories/TableCategories';
import CreateCategories from '../../components/categories/CreateCategories/CreateCategories';

const CategoriesContainer: React.FC = () => {
  const {
    actions: { handleChangeFilters }
  } = useCategories();

  return (
    <div>
      <div className="header d-flex">
        <div className="header-first-block">
          <HeaderList
            handleChangeFilters={handleChangeFilters}
            showRangePicker={false}
          />
        </div>
        <div>
          <CreateCategories />
        </div>
      </div>
      <TableCategories />
    </div>
  );
};

export default CategoriesContainer;
