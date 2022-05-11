/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Tag } from 'antd';
import { FragmentValue } from '../../../../context/inventory/BoxContext/BoxContext';
import {
  ArgsBuildColumnEditAndDelete,
  ColumnsTable,
  OnClickCell
} from '../../../../../domain/interfaces/columns-table';
import { BOX_STATE_COLOR_AND_NAME } from '../../../../../helpers/constants/inventory';
import { stateCatalogType } from '../../../../../domain/models/catalog';
import { DataCollectedInventory } from '../../../../../domain/models/inventory';
import RenderItem from '../../../generic/render-item/RenderItem';
import { implementSearchFilter } from '../../../../../helpers/implement-filter';
import {
  buildColumnEditAndDelete,
  getColumnsWithOnCellClick
} from '../../../../../utils/columns';

export const COLUMNS_TABLE_PLACES: ColumnsTable = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    isFilterableBySearch: true
  },
  {
    title: 'Calle Principal',
    dataIndex: 'mainStreet',
    key: 'mainStreet',
    isFilterableBySearch: true
  },
  {
    title: 'Número de casa',
    dataIndex: 'addressNumber',
    key: 'addressNumber',
    isFilterableBySearch: true
  },
  {
    title: 'Colonia',
    dataIndex: 'colony',
    key: 'colony'
  },
  {
    title: 'Municipio',
    dataIndex: 'municipality',
    key: 'municipality',
    isFilterableBySearch: true
  },
  {
    title: 'Ciudad',
    dataIndex: 'city',
    key: 'city',
    isFilterableBySearch: true
  },
  {
    title: 'Provincia',
    dataIndex: 'state',
    key: 'state',
    isFilterableBySearch: true
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
    isFilterableBySearch: true
  },
  {
    title: 'Fecha',
    dataIndex: 'createdAt',
    key: 'createdAt'
  }
];

const getColumnsWithFilters = () => {
  const columnsWithFilters = COLUMNS_TABLE_PLACES.map((column) => {
    if (!column.isFilterableBySearch) return column;

    return implementSearchFilter(column);
  });

  return columnsWithFilters;
};

export const getColumnsWithButtons = (args: ArgsBuildColumnEditAndDelete) => {
  const columns = getColumnsWithFilters();

  columns.push(buildColumnEditAndDelete(args));

  return columns as ColumnsTable;
};
