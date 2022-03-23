import React from 'react';
import { Form, Button, Modal } from 'antd';
import useAddCategoryItemState from './state/useAddCatalogsItemState';
import ListCatalog from '../../../../../generic/ListCatalog/ListCatalog';
import AddCatalog from '../../../../../generic/catalog/AddCatalog/AddCatalog';

const AddCatalogslItem: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  const {
    catalogs,
    visibleModal,
    linkedCatalogs,
    actions: { handleCancel, handleOpen, handleLinkedItemClick }
  } = useAddCategoryItemState();

  return (
    <>
      <Form.Item
        name="category"
        label="Categoría"
        help="Primero debe seleccionar un técnico antes de asignar una categoría"
        rules={[
          {
            async validator() {
              if (linkedCatalogs.length === 0) {
                throw new Error();
              }
            },
            message: 'Seleccione un material'
          }
        ]}
      >
        <Button type="primary" onClick={handleOpen} disabled={disabled}>
          Agregar
        </Button>
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
        />
      </Modal>
    </>
  );
};

export default AddCatalogslItem;
