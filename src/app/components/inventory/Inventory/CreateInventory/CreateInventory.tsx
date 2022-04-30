import React from 'react';
import { Button, Modal } from 'antd';

import FormInventory from './FormInventory/FormInventory';
import useCreateInventoryState from './state/useCreateInventoryState';

const CreateInventory: React.FC = () => {
  const {
    visibleModal,
    actions: { handleOpen, handleCancel }
  } = useCreateInventoryState();

  return (
    <>
      <Button type="primary" onClick={handleOpen}>
        Crear
      </Button>
      <Modal
        visible={visibleModal}
        onOk={handleOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <FormInventory />
      </Modal>
    </>
  );
};

export default CreateInventory;
