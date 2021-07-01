/* eslint-disable react/no-array-index-key */
import React, { useState, FunctionComponent } from 'react';
import { Button, Modal } from 'antd';

import FormUser from './FormUser';

const CreateUser: FunctionComponent<{ addNewUser }> = ({ addNewUser }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleOk = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleOk}>
        Crear
      </Button>
      <Modal
        title="Crear usuario"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <FormUser handleOk={addNewUser} />
      </Modal>
    </>
  );
};

export default CreateUser;
