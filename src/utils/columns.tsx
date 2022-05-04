/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Button, Popconfirm, Space, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ColumnsTable, ColumnTable } from '../domain/interfaces/columns-table';

export type OnClickCell = (nonClickableColumn?: boolean) => (record: any) =>
  | {
      onClick: () => void;
    }
  | undefined;

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

    const styleDeleteButton = disableDeleteButton
      ? {
          color: '#969faf'
        }
      : undefined;

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
          <Button
            type="link"
            color="red"
            icon={<DeleteOutlined style={styleDeleteButton} />}
            danger
          />
        </Popconfirm>
      </Space>
    );
  }
});

export const getColumnsWithOnCellClick = (
  columns: ColumnsTable,
  onClickCell?: OnClickCell
) => {
  const columnsWithFilters = columns.map((column) => {
    const children = column.children?.map((columChild) => {
      return {
        ...columChild,
        onCell: onClickCell ? onClickCell() : undefined
      };
    });

    return {
      ...column,
      children,
      onCell: onClickCell ? onClickCell() : undefined
    };
  });

  return columnsWithFilters;
};
