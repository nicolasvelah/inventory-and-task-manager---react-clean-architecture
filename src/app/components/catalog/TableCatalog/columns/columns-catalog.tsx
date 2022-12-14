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

export const COLUMNS_TABLE_CATALOG: ColumnsTable = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
    width: 150,
    isFilterableBySearch: true
  },
  {
    title: 'Equipo',
    dataIndex: 'device',
    key: 'device',
    width: 250,
    isFilterableBySearch: true
  },
  {
    title: 'Marca',
    dataIndex: 'brand',
    key: 'brand',
    isFilterableBySearch: true
  },
  {
    title: 'Modelo',
    dataIndex: 'model',
    key: 'model',
    isFilterableBySearch: true
  },
  {
    title: 'Categoría',
    dataIndex: 'category',
    key: 'category',
    isFilterableBySearch: true
  },
  {
    title: 'Descripción categoría',
    dataIndex: 'categoryDescription',
    key: 'categoryDescription'
  },
  {
    title: 'Tipo de lugar',
    dataIndex: 'typePlace',
    key: 'typePlace',
    width: 150
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
    width: 150
  },
  {
    title: 'Unidad',
    dataIndex: 'unity',
    key: 'unity'
  },
  {
    title: 'Creado el',
    dataIndex: 'createdAt',
    key: 'createdAt'
  },
  {
    title: 'Actualizado el',
    dataIndex: 'updatedAt',
    key: 'updatedAt'
  }
];

export const getColumnsWithFilters = () => {
  const columnsWithFilters = COLUMNS_TABLE_CATALOG.map((column) => {
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
