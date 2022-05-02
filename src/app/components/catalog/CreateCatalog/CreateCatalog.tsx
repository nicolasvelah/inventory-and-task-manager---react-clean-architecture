import React from 'react';
import { Button, Modal } from 'antd';

import FormCatalog from './FormCatalog/FormCatalog';
import useCreateCatalogState from './state/useCreateCatalogState';

const CreateCatalog: React.FC = () => {
  const {
    visibleModal,
    actions: { handleOpen, handleCancel }
  } = useCreateCatalogState();

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
        <FormCatalog />
      </Modal>
    </>
  );
};

export default CreateCatalog;
