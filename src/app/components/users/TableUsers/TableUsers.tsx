/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table, Modal } from 'antd';
import FormUser from '../FormUser/FormUser';
import useTableUsersState from './state/useTableUsersState';
import { getColumnsWithButtons } from './columns/columns-users';

const TableUsers: React.FC = () => {
  const {
    dataTable,
    viewModal,
    valueToEdit,
    actions: { handleEdit, handleDelete, openModal, closeModal }
  } = useTableUsersState();

  return (
    <div>
      <Table
        columns={getColumnsWithButtons({
          handleDelete,
          handleEdit,
          propsDataSendEmail: {
            handleEditEmail: () => console.log('Email sent')
          }
        })}
        dataSource={dataTable}
        scroll={{ x: 1100 }}
      />
      <Modal
        title="Editar usuario"
        visible={viewModal}
        onOk={openModal}
        onCancel={closeModal}
        destroyOnClose
        footer={null}
      >
        {valueToEdit && <FormUser initValues={valueToEdit ?? undefined} />}
      </Modal>
    </div>
  );
};

export default TableUsers;
