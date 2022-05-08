/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  ArgsBuildColumnEditAndDelete,
  ColumnsTable,
  OnClickCell
} from '../../../../../domain/interfaces/columns-table';
import { implementSearchFilter } from '../../../../../helpers/implement-filter';
import {
  buildColumnEditAndDelete,
  getColumnsWithOnCellClick
} from '../../../../../utils/columns';

export const COLUMNS_TABLE_USERS: ColumnsTable = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key'
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    isFilterableBySearch: true
  },
  {
    title: 'Apellido',
    dataIndex: 'lastName',
    key: 'lastName',
    isFilterableBySearch: true
  },
  {
    title: 'Fecha de nacimiento',
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    isFilterableBySearch: true
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone',
    isFilterableBySearch: true
  },
  {
    title: 'Rol',
    dataIndex: 'role',
    key: 'role',
    isFilterableBySearch: true
  },
  {
    title: 'Estado',
    dataIndex: 'enabled',
    key: 'enabled',
    isFilterableBySearch: true
  },
  {
    title: 'Fecha de creación',
    dataIndex: 'createdAt',
    key: 'createdAt'
  }
];

const getColumnsWithFilters = (onClickCell?: OnClickCell) => {
  const columnsWithFilters = getColumnsWithOnCellClick(
    COLUMNS_TABLE_USERS,
    onClickCell
  ).map((column) => {
    if (!column.isFilterableBySearch) return column;

    return implementSearchFilter(column);
  });

  return columnsWithFilters;
};

export const getColumnsWithButtons = (args: ArgsBuildColumnEditAndDelete) => {
  const columns = getColumnsWithFilters(args.onClickCell);

  columns.push(buildColumnEditAndDelete(args));

  return columns as ColumnsTable;
};
