/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Button, Popconfirm, Space, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ColumnTable } from '../domain/interfaces/columns-table';

export const buildColumnEditAndDelete = (args: {
  handleEdit: (currentData: any) => void;
  handleDelete: (id: string) => void;
  disableDeleteButton?: (record: any) => boolean;
}): ColumnTable => ({
  title: '',
  dataIndex: 'buttons',
  key: 'buttons',
  width: 120,
  render: (value: any, record: any, index: number) => {
    let disableDeleteButton = false;
    if (args.disableDeleteButton) {
      disableDeleteButton = args.disableDeleteButton(record);
    }

    return (
      <Space>
        <Tooltip title="Editar">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => args.handleEdit(record.data)}
          />
        </Tooltip>
        <Popconfirm
          title="Deseas eliminar este item？"
          okText="Si"
          cancelText="No"
          onConfirm={() => args.handleDelete(record.key)}
          disabled={disableDeleteButton}
        >
          <Button type="link" color="red" icon={<DeleteOutlined />} danger />
        </Popconfirm>
      </Space>
    );
  }
});
