import React from 'react';
import useCategories from './state/useCategories';
import TableCategories from '../../components/categories/TableCategories/TableCategories';
import CreateCategories from '../../components/categories/CreateCategories/CreateCategories';

const CategoriesContainer: React.FC = () => {
  useCategories();

  return (
    <div>
      <div className="header d-flex jc-end">
        <div>
          <CreateCategories />
        </div>
      </div>
      <TableCategories />
    </div>
  );
};

export default CategoriesContainer;
