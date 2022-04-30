import React from 'react';
import { Button, Modal } from 'antd';

import FormBox from './FormBox/FormBox';
import useCreateBoxState from './state/useCreateBoxState';

const CreateBox: React.FC = () => {
  const {
    visibleModal,
    actions: { handleOpen, handleCancel }
  } = useCreateBoxState();

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
        <FormBox />
      </Modal>
    </>
  );
};

export default CreateBox;
