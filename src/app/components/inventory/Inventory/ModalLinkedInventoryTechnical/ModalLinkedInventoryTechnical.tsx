/* eslint-disable object-curly-newline */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Modal, Input, Table } from 'antd';
import useModalLinkedInventoryTechnical from './state/useModalLinkedInventoryTechnical';
import { getColumnsTableTechnicals } from '../../../../../helpers/constants/columns-table-tasks';

const { Search } = Input;

const ModalLinkedInventoryTechnical: React.FC = () => {
  const {
    dataTable,
    visibleModal,
    searchText,
    rowSelection,
    actions: {
      handleOpen,
      handleCancel,
      onSearchText,
      onChangeText,
      linkedInventoryTechnical
    }
  } = useModalLinkedInventoryTechnical();

  return (
    <>
      <Button type="primary" onClick={handleOpen}>
        Vincular Técnico
      </Button>
      <Modal
        visible={visibleModal}
        onOk={handleOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <div>
          <Search
            placeholder="Buscar"
            onSearch={onSearchText}
            value={searchText}
            onChange={onChangeText}
            enterButton
            style={{ maxWidth: 400 }}
          />
          <Table
            columns={getColumnsTableTechnicals(
              linkedInventoryTechnical(rowSelection.selectedRowKeys)
            )}
            scroll={{ x: 800, y: 450 }}
            dataSource={dataTable}
            pagination={{
              pageSize: 10
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalLinkedInventoryTechnical;
