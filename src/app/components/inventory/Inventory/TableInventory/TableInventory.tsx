/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Modal, Table } from 'antd';
import { getColumnsWithButtons } from './columns/columns-inventory';
import useTableInventory from './state/useTableInventory';
import FormInventory from '../CreateInventory/FormInventory/FormInventory';

const TableInventory: React.FC = () => {
  const {
    actions: { handleEdit, handleDelete, openModal, closeModal },
    viewModal,
    valueToEdit,
    dataTable,
    rowSelection
  } = useTableInventory();

  return (
    <div>
      <Table
        columns={getColumnsWithButtons({
          handleDelete,
          handleEdit,
          disableDeleteButton: (record) => !!record?.place
        })}
        rowSelection={rowSelection}
        dataSource={dataTable}
        scroll={{ x: 1600, y: 450 }}
        pagination={{
          pageSize: 10
        }}
      />

      <Modal
        visible={viewModal}
        onOk={openModal}
        onCancel={closeModal}
        footer={null}
        width={800}
        destroyOnClose
      >
        {valueToEdit && <FormInventory initValues={valueToEdit} />}
      </Modal>
    </div>
  );
};

export default TableInventory;
