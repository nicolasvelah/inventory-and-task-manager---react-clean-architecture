import React from 'react';
import { Button } from 'antd';
import useAddCatalogState from './state/useAddCatalogState';
import { AddCatalogProps } from './AddCatalog.interfaces';
import ListCatalog from '../../ListCatalog/ListCatalog';
import './add-catalog.scss';

const AddCatalog: React.FC<AddCatalogProps> = ({
  catalogs,
  linkedCatalogs,
  handleLinkedCatalogs,
  handleCancelModal
}) => {
  const {
    catalogsMenu,
    actions: { handleSaveCatalogs, handleCurrentCatalogsMenu }
  } = useAddCatalogState({
    linkedCatalogs,
    catalogs,
    handleLinkedCatalogs,
    handleCancelModal
  });

  return (
    <div className="add-catalog">
      <div className="header-add-catalog">
        <h2>Catálogo</h2>
        <h4>Selecciona el catálogo que vas usar en el sitio</h4>
      </div>
      <div className="body-add-catalog">
        <ListCatalog
          catalogs={catalogsMenu}
          handleItemClick={handleCurrentCatalogsMenu}
        />
      </div>
      <div className="footer-add-catalog">
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
