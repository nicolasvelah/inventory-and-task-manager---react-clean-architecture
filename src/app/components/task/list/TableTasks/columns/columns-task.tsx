/* eslint-disable no-unused-vars */
import { Tag } from 'antd';
import React from 'react';
import {
  ArgsBuildColumnEditAndDelete,
  ColumnsTable,
  OnClickCell
} from '../../../../../../domain/interfaces/columns-table';
import { implementSearchFilter } from '../../../../../../helpers/implement-filter';
import {
  buildColumnEditAndDelete,
  getColumnsWithOnCellClick
} from '../../../../../../utils/columns';

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
    key: 'coordinator',
    isFilterableBySearch: true
  },
  {
    title: 'Técnico',
    dataIndex: 'technical',
    key: 'technical',
    isFilterableBySearch: true
  },
  {
    title: 'Sitio',
    dataIndex: 'address',
    key: 'address',
    isFilterableBySearch: true
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

export const getColumnsWithFilters = (onClickCell?: OnClickCell) => {
  const columnsWithFilters = getColumnsWithOnCellClick(
    COLUMNS_TABLE_TASKS,
    onClickCell
  ).map((column) => {
    if (!column.isFilterableBySearch) return column;

    return implementSearchFilter(column);
  });

  return columnsWithFilters;
};

export const getColumnsWithButtons = (
  args: ArgsBuildColumnEditAndDelete
): ColumnsTable => {
  const columns = getColumnsWithFilters(args.onClickCell);

  columns.push(buildColumnEditAndDelete(args));

  return columns;
};
