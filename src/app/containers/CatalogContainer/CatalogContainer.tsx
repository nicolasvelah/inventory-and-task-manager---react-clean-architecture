import React from 'react';
import { Button } from 'antd';

import HeaderList from '../../components/generic/header-list/HeaderList';
import TableCatalog from '../../components/catalog/TableCatalog/TableCatalog';
import useCatalog from './state/useCatalog';
import CreateCatal from '../../components/catalog/CreateCatalog/CreateCatalog';

const CatalogContainer: React.FC = () => {
  const {
    actions: { handleChangeFilters }
  } = useCatalog();
  return (
    <div>
      <div className="header">
        <div className="header-first-block">
          <HeaderList
            handleChangeFilters={handleChangeFilters}
            showRangePicker={false}
            placeHolder="Buscar catálogo"
          />
        </div>
        <div>
          <Button>Excel</Button>
          <CreateCatal />
        </div>
      </div>
      <TableCatalog />
    </div>
  );
};

export default CatalogContainer;
