import React from 'react';
import { Button, Modal } from 'antd';

import FormPlace from './FormPlace/FormPlace';
import useCreatePlaceState from './state/useCreatePlaceState';

const CreatePlace: React.FC = () => {
  const {
    visibleModal,
    actions: { handleOpen, handleCancel }
  } = useCreatePlaceState();

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
        <FormPlace />
      </Modal>
    </>
  );
};

export default CreatePlace;
