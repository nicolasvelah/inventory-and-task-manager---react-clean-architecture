/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  ArgsBuildColumnEditAndDelete,
  ColumnsTable
} from '../../../../../domain/interfaces/columns-table';
import { implementSearchFilter } from '../../../../../helpers/implement-filter';
import { buildColumnEditAndDelete } from '../../../../../utils/columns';

export const COLUMNS_TABLE_CATEGORIES: ColumnsTable = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
    isFilterableBySearch: true
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    isFilterableBySearch: true
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Fecha de creación',
    dataIndex: 'createdAt',
    key: 'createdAt'
  }
];

export const getColumnsWithFilters = () => {
  const columnsWithFilters = COLUMNS_TABLE_CATEGORIES.map((column) => {
    if (!column.isFilterableBySearch) return column;
    return implementSearchFilter(column);
  });

  return columnsWithFilters;
};

export const getColumnsWithButtons = (args: ArgsBuildColumnEditAndDelete) => {
  const columns = getColumnsWithFilters();

  columns.push(buildColumnEditAndDelete(args));

  return columns;
};
