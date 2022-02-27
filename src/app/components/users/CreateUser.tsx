/* eslint-disable react/no-array-index-key */
import React, { useState, FunctionComponent } from 'react';
import { Button, Modal } from 'antd';

import FormUser from './FormUser';
import User from '../../../domain/models/user';

// eslint-disable-next-line no-unused-vars
const CreateUser: FunctionComponent<{ addNewUser: (user: User) => void }> = ({ addNewUser }) => {
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
