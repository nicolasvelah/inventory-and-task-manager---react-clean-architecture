/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Modal, Table } from 'antd';
import { getColumnsWithButtons } from './columns/columns-box';
import useTableBox from './state/useTableBox';
import FormBox from '../../box/CreateBox/FormBox/FormBox';

const TableBox: React.FC = () => {
  const {
    dataTable,
    rowSelection,
    viewModal,
    valueToEdit,
    actions: {
      handleEdit,
      handleDelete,
      openModal,
      closeModal,
      disableDeleteButton,
      onClickCell
    }
  } = useTableBox();

  return (
    <div>
      <Table
        columns={getColumnsWithButtons({
          handleDelete,
          handleEdit,
          disableDeleteButton,
          onClickCell
        })}
        rowSelection={rowSelection}
        dataSource={dataTable}
        bordered
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
        {valueToEdit && <FormBox initValues={valueToEdit} />}
      </Modal>
    </div>
  );
};

export default TableBox;
