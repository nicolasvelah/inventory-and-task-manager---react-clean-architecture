/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table, Modal } from 'antd';
import FormUser from '../FormUser/FormUser';
import useTableUsersState from './state/useTableUsersState';
import { getColumnsTableUser } from '../../../../helpers/constants/columns-table-tasks';

const TableUsers: React.FC = () => {
  const {
    dataTable,
    visibleModalEdit,
    valuesEdit,
    actions: {
      valuesToEdit,
      handleCancelModalEdit,
      handleOk,
      handleOkModalEdit
    }
  } = useTableUsersState();

  return (
    <div>
      <Table
        columns={getColumnsTableUser(valuesToEdit)}
        dataSource={dataTable}
        scroll={{ x: 1100 }}
      />
      <Modal
        title="Editar usuario"
        visible={visibleModalEdit}
        onOk={handleOkModalEdit}
        onCancel={handleCancelModalEdit}
        destroyOnClose
        footer={null}
      >
        {valuesEdit && (
          <FormUser initValues={valuesEdit ?? undefined} handleOk={handleOk} />
        )}
      </Modal>
    </div>
  );
};

export default TableUsers;
