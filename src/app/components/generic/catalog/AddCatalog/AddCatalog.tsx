import React from 'react';
import { Button } from 'antd';
import useAddCatalogState from './state/useAddCatalogState';
import { AddCatalogProps } from './AddCatalog.interfaces';

import ListCatalog from '../../ListCatalog/ListCatalog';

const AddCatalog: React.FC<AddCatalogProps> = ({
  catalogs,
  linkedCatalogs,
  handleLinkedCatalogs
}) => {
  const {
    catalogsMenu,
    actions: { handleSaveCatalogs, handleCurrentCatalogsMenu }
  } = useAddCatalogState({
    linkedCatalogs,
    catalogs,
    handleLinkedCatalogs
  });

  return (
    <div className="add-material">
      <div className="header-add-material">
        <h2>Catálogo</h2>
        <h4>Selecciona el catálogo que vas usar en el sitio</h4>
      </div>
      <div style={{ height: 400, overflowY: 'scroll' }}>
        <ListCatalog
          catalogs={catalogsMenu}
          handleItemClick={handleCurrentCatalogsMenu}
        />
      </div>
      <div className="footer-add-material">
        <span>
          Al guardar los catalogos seleccionados se asignarán al técnico y sitio
          asignados a la tarea
        </span>
        <Button type="primary" onClick={handleSaveCatalogs}>
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default AddCatalog;
