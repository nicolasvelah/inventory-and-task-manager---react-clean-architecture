/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Modal, Pagination, Table } from 'antd';

import { getColumnsWithButtons } from './columns/columns-task';
import useTasksTable from './state/useTasks';
import FormTask from '../CreateTask/FormTask/FormTask';

const TableTasks: React.FC = () => {
  const {
    viewModal,
    valueToEdit,
    dataTable,
    filters,
    actions: {
      onChangePage,
      onClickRow,
      handleEdit,
      handleDelete,
      openModal,
      closeModal
    }
  } = useTasksTable();

  return (
    <div>
      <Table
        columns={getColumnsWithButtons({
          handleDelete,
          handleEdit
        })}
        dataSource={dataTable}
        scroll={{ x: 1100, y: 450 }}
        pagination={false}
        onRow={onClickRow as any}
      />
      <Pagination
        showQuickJumper
        defaultCurrent={1}
        current={filters.currentPage}
        total={filters.total}
        onChange={onChangePage}
        style={{ marginTop: 10 }}
      />

      <Modal
        visible={viewModal}
        onOk={openModal}
        onCancel={closeModal}
        footer={null}
        width={800}
        destroyOnClose
      >
        {valueToEdit && <FormTask initValues={valueToEdit} />}
      </Modal>
    </div>
  );
};

export default TableTasks;
