import React from 'react';
import { Form, Button, Modal } from 'antd';
import useAddCategoryItemState from './state/useAddCatalogsItemState';
import ListCatalog from '../../../../../generic/ListCatalog/ListCatalog';
import AddCatalog from '../../../../../generic/catalog/AddCatalog/AddCatalog';
import { CatalogItem } from '../../../../../generic/catalog/AddCatalog/AddCatalog.interfaces';

const AddCatalogslItem: React.FC<{
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  handleCatalogSelected: (catalogs: CatalogItem[]) => void;
}> = ({ disabled, handleCatalogSelected }) => {
  const {
    catalogs,
    visibleModal,
    linkedCatalogs,
    actions: { handleCancel, handleOpen, handleLinkedItemClick }
  } = useAddCategoryItemState({ handleCatalogSelected });

  return (
    <>
      <Form.Item
        name="catalog"
        label="Catálogo"
        rules={[
          {
            async validator() {
              if (linkedCatalogs.length === 0) {
                throw new Error();
              }
            },
            message: 'Seleccione un catálogo'
          }
        ]}
      >
        <Button type="primary" onClick={handleOpen} disabled={disabled}>
          Agregar
        </Button>
        <br />
        <span>
          Primero debes seleccionar un técnico antes de asignar un catálogo
        </span>
      </Form.Item>
      {linkedCatalogs.length > 0 && (
        <Form.Item name="" label={<div />}>
          <ListCatalog
            catalogs={linkedCatalogs}
            handleItemClick={handleLinkedItemClick}
          />
        </Form.Item>
      )}

      <Modal
        visible={visibleModal}
        onOk={handleOpen}
        onCancel={handleCancel}
        width="90vw"
        footer={null}
      >
        <AddCatalog
          catalogs={catalogs}
          linkedCatalogs={linkedCatalogs}
          handleLinkedCatalogs={handleLinkedItemClick}
          handleCancelModal={handleCancel}
        />
      </Modal>
    </>
  );
};

export default AddCatalogslItem;
