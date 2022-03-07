import React from 'react';
import { Form, Button, Modal } from 'antd';
import AddMaterials from '../../../../../material/AddMaterials/AddMaterials';
import useAddMaterialItemState from './state/useAddMaterialItemState';
import ListMaterials from '../../../../../generic/ListMaterials/ListMaterials';
import { AddMaterialItemProps } from './AddMaterialItem.interface';

const AddMaterialItem: React.FC<AddMaterialItemProps> = ({ disabled }) => {
  const {
    visibleModal,
    linkedMaterials,
    categoryMaterials,
    actions: {
      handleCancel,
      handleOpen,
      handleLinkedMaterials,
      handleLinkedItemClick,
      handleItemClick
    }
  } = useAddMaterialItemState();
  return (
    <>
      <Form.Item
        name="material"
        label="Material"
        rules={[
          {
            async validator() {
              if (linkedMaterials.length === 0) {
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
      {linkedMaterials.length > 0 && (
        <Form.Item name="" label={<div />}>
          <ListMaterials
            materials={linkedMaterials}
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
        <AddMaterials
          categoryMaterials={categoryMaterials}
          handleLinkedMaterials={handleLinkedMaterials}
          handleItemClick={handleItemClick}
        />
      </Modal>
    </>
  );
};

export default AddMaterialItem;
