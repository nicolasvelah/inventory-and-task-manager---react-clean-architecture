/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Modal, Table } from 'antd';
import { getColumnsWithButtons } from './columns/columns-places';
import usePlacesTable from './state/usePlacesTable';
import FormPlace from '../CreatePlace/FormPlace/FormPlace';

const TablePlaces: React.FC = () => {
  const {
    dataTable,
    viewModal,
    valueToEdit,
    actions: { handleEdit, handleDelete, openModal, closeModal }
  } = usePlacesTable();

  return (
    <div>
      <Table
        columns={getColumnsWithButtons({
          handleDelete,
          handleEdit
        })}
        dataSource={dataTable}
        scroll={{ x: 1100, y: 450 }}
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
        {valueToEdit && <FormPlace initValues={valueToEdit} />}
      </Modal>
    </div>
  );
};

export default TablePlaces;
