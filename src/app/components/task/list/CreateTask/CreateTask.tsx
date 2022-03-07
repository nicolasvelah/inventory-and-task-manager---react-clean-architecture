import React from 'react';
import { Button, Modal } from 'antd';

import FormTask from './FormTask/FormTask';
import useCreateTaskState from './state/useCreateTaskState';

const CreateTask: React.FC = () => {
  const {
    visibleModal,
    actions: { handleOpen, handleCancel }
  } = useCreateTaskState();

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
        <FormTask />
      </Modal>
    </>
  );
};

export default CreateTask;
