import React from 'react';
import { Space } from 'antd';

import TableCatalog from '../../components/catalog/TableCatalog/TableCatalog';
import useCatalog from './state/useCatalog';
import CreateCatal from '../../components/catalog/CreateCatalog/CreateCatalog';
import ExportCsv from '../../components/catalog/ExportCsv/ExportCsv';

const CatalogContainer: React.FC = () => {
  useCatalog();
  return (
    <div>
      <div className="d-flex jc-end">
        <Space>
          <ExportCsv />
          <CreateCatal />
        </Space>
      </div>
      <TableCatalog />
    </div>
  );
};

export default CatalogContainer;
