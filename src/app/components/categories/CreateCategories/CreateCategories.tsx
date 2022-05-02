import React from 'react';
import { Button, Modal } from 'antd';

import FormCategories from './FormCategories/FormCategories';
import useCreateCategoriesState from './state/useCreateCategoriesState';

const CreateCategories: React.FC = () => {
  const {
    visibleModal,
    actions: { handleOpen, handleCancel }
  } = useCreateCategoriesState();

  return (
    <>
      <Button type="primary" onClick={handleOpen} className="m-l-20">
        Crear
      </Button>
      <Modal
        visible={visibleModal}
        onOk={handleOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <FormCategories />
      </Modal>
    </>
  );
};

export default CreateCategories;
