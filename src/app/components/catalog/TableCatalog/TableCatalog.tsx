/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Modal, Table } from 'antd';
import { getColumnsWithButtons } from './columns/columns-catalog';
import useCatalogTable from './state/useCatalogTable';
import FormCatalog from '../CreateCatalog/FormCatalog/FormCatalog';

const TableCatalog: React.FC = () => {
  const {
    actions: { handleEdit, handleDelete, openModal, closeModal },
    viewModal,
    valueToEdit,
    dataTable
  } = useCatalogTable();
  return (
    <div>
      <Table
        columns={getColumnsWithButtons({
          handleDelete,
          handleEdit
        })}
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
        {valueToEdit && <FormCatalog initValues={valueToEdit} />}
      </Modal>
    </div>
  );
};

export default TableCatalog;
