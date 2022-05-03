/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Tag } from 'antd';
import { ColumnsTable } from '../../../../../../domain/interfaces/columns-table';
import RenderItem from '../../../../generic/render-item/RenderItem';
import { INVENTORY_STATE_COLOR_AND_NAME } from '../../../../../../helpers/constants/inventory';
import {
  DataCollectedInventory,
  inventoryStateType
} from '../../../../../../domain/models/inventory';
import { implementSearchFilter } from '../../../../../../helpers/implement-filter';
import { buildColumnEditAndDelete } from '../../../../../../utils/columns';

export const COLUMNS_TABLE_INVENTORY: ColumnsTable = [
  {
    title: 'Id Equipo',
    dataIndex: 'key',
    key: 'key',
    width: 150
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
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
    dataIndex: 'referenceModel',
    key: 'referenceModel',
    isFilterableBySearch: true
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    isFilterableBySearch: true
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
    isFilterableBySearch: true
  },
  {
    title: 'Estado',
    dataIndex: 'state',
    key: 'state',
    width: 100,
    render: (value: inventoryStateType) => (
      <Tag color={INVENTORY_STATE_COLOR_AND_NAME[value].color}>
        {INVENTORY_STATE_COLOR_AND_NAME[value].name}
      </Tag>
    ),
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
    dataIndex: 'place',
    key: 'place'
  },
  {
    title: 'Identificadores',
    dataIndex: 'identifiers',
    key: 'identifiers',
    render: (dataColected?: DataCollectedInventory[]) => (
      <>
        {(dataColected ?? []).map(({ name, value }, index) => (
          <RenderItem label={name} value={value} key={index} />
        ))}
      </>
    )
  },
  {
    title: 'Id Tarea',
    dataIndex: 'idTask',
    key: 'idTask',
    isFilterableBySearch: true
  },
  {
    title: 'Fecha',
    dataIndex: 'date',
    key: 'date'
  }
];

export const getColumnsWithFilters = () => {
  const columnsWithFilters = COLUMNS_TABLE_INVENTORY.map((column) => {
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
