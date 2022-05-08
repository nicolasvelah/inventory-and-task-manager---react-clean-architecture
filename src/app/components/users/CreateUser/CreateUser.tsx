/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button, Modal } from 'antd';
import FormUser from '../FormUser/FormUser';
import useCreateUserState from './state/useCreateUserState';

const CreateUser: React.FC = () => {
  const {
    visible,
    actions: { handleCancel, handleOk }
  } = useCreateUserState();

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
        <FormUser />
      </Modal>
    </>
  );
};

export default CreateUser;
