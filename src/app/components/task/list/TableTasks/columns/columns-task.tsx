/* eslint-disable no-unused-vars */
import { Tag } from 'antd';
import React from 'react';
import { ColumnsTable } from '../../../../../../domain/interfaces/columns-table';
import { implementSearchFilter } from '../../../../../../helpers/implement-filter';
import { buildColumnEditAndDelete } from '../../../../../../utils/columns';

export const COLUMNS_TABLE_TASKS: ColumnsTable = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key'
  },
  {
    title: 'Estado',
    dataIndex: 'closedDate',
    key: 'state',
    width: 100,
    render: (closedDate: any) => (
      <Tag color={closedDate ? 'red' : 'green'}>
        {closedDate ? 'cerrada' : 'abierta'}
      </Tag>
    )
  },
  {
    title: 'Coordinador',
    dataIndex: 'coordinator',
    key: 'coordinator'
  },
  {
    title: 'Técnico',
    dataIndex: 'technical',
    key: 'technical'
  },
  {
    title: 'Sitio',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Fecha programada',
    dataIndex: 'scheduledDate',
    key: 'scheduledDate'
  },
  {
    title: 'Fecha de arribo',
    dataIndex: 'arrivalDate',
    key: 'arrivalDate'
  },
  {
    title: 'Fecha de cierre',
    dataIndex: 'closedDate',
    key: 'closedDate'
  }
];

export const getColumnsWithFilters = () => {
  const columnsWithFilters = COLUMNS_TABLE_TASKS.map((column) => {
    if (!column.isFilterableBySearch) return column;
    return implementSearchFilter(column);
  });

  return columnsWithFilters;
};

export const getColumnsWithButtons = (args: {
  handleEdit: (currentData: any) => void;
  handleDelete: (id: string) => void;
  disableDeleteButton?: (record: any) => boolean;
}) => {
  const columns = getColumnsWithFilters();

  columns.push(buildColumnEditAndDelete(args));

  return columns;
};
