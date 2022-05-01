import React from 'react';

import HeaderList from '../../components/generic/header-list/HeaderList';
import TableCatalog from '../../components/catalog/TableCatalog/TableCatalog';
import useCatalog from './state/useCatalog';
import CreateCatal from '../../components/catalog/CreateCatalog/CreateCatalog';
import ExportCsv from '../../components/catalog/ExportCsv/ExportCsv';

const CatalogContainer: React.FC = () => {
  const {
    actions: { handleChangeFilters }
  } = useCatalog();
  return (
    <div>
      <div className="d-flex">
        <div className="header-first-block">
          <HeaderList
            handleChangeFilters={handleChangeFilters}
            showRangePicker={false}
            placeHolder="Buscar catálogo"
          />
        </div>
        <div className="m-l-auto">
          <ExportCsv />
          <CreateCatal />
        </div>
      </div>
      <TableCatalog />
    </div>
  );
};

export default CatalogContainer;
