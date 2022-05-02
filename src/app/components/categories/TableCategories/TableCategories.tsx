/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Modal, Table } from 'antd';
import { getColumnsWithButtons } from './columns/columns-categories';
import useCategoriesTable from './state/useCategoriesTable';
import FormCategory from '../CreateCategories/FormCategories/FormCategories';

const TableCatalog: React.FC = () => {
  const {
    actions: { handleEdit, handleDelete, openModal, closeModal },
    viewModal,
    valueToEdit,
    dataTable
  } = useCategoriesTable();
  return (
    <div>
      <Table
        columns={getColumnsWithButtons({
          handleDelete,
          handleEdit
        })}
        dataSource={dataTable}
        scroll={{ x: 1300, y: 450 }}
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
        {valueToEdit && <FormCategory initValues={valueToEdit} />}
      </Modal>
    </div>
  );
};

export default TableCatalog;
