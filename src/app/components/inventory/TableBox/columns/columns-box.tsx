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

export const COLUMNS_TABLE_FRAGMENTS: ColumnsTable = [
  {
    title: 'Total del fragmento',
    dataIndex: 'totalFragment',
    key: 'totalFragment',
    width: 115,
    className: 'fragment',
    render: (totalFragments: FragmentValue[]) => (
      <table>
        <tbody>
          {(totalFragments ?? []).map((total, index) => {
            const value = `${total.value} ${total.unitOfMeasurement}`;
            return (
              <tr key={`row_total_${index}`}>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  },
  {
    title: 'Total usado del fragmento',
    dataIndex: 'remainingFragment',
    key: 'remainingFragment',
    width: 115,
    className: 'fragment',
    render: (remainingFragment: FragmentValue[]) => (
      <table>
        <tbody>
          {(remainingFragment ?? []).map((remaining, index) => {
            const value = `${remaining.value} ${remaining.unitOfMeasurement}`;
            return (
              <tr key={`row_remaining_${index}`}>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  },
  {
    title: 'Técnico del fragmento',
    dataIndex: 'technicalFragment',
    key: 'technicalFragment',
    width: 200,
    className: 'fragment',
    render: (technicalFragment: FragmentValue[]) => (
      <table>
        <tbody>
          {(technicalFragment ?? []).map((technical, index) => {
            const value = `${technical.value} ${technical.unitOfMeasurement}`;
            return (
              <tr key={`row_technical_${index}`}>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  }
];

export const COLUMNS_TABLE_BOX: ColumnsTable = [
  {
    title: 'Id Equipo',
    dataIndex: 'key',
    key: 'key',
    width: 250
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    isFilterableBySearch: true
  },
  {
    title: 'Estado',
    dataIndex: 'state',
    key: 'state',
    width: 100,
    render: (value: stateCatalogType) => (
      <Tag color={BOX_STATE_COLOR_AND_NAME[value].color}>
        {BOX_STATE_COLOR_AND_NAME[value].name}
      </Tag>
    )
  },
  {
    title: 'Identificadores',
    dataIndex: 'identifiers',
    key: 'identifiers',
    width: 200,
    render: (dataColected?: DataCollectedInventory[]) => (
      <>
        {(dataColected ?? []).map(({ name, value }, index) => (
          <RenderItem label={name} value={value} key={index} />
        ))}
      </>
    )
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    width: 150,
    isFilterableBySearch: true
  },
  {
    title: 'Restante',
    dataIndex: 'remaining',
    key: 'remaining',
    width: 150,
    isFilterableBySearch: true
  },
  {
    title: 'Fragmentos',
    children: COLUMNS_TABLE_FRAGMENTS
  }
];

const getColumnsWithFilters = (onClickCell?: OnClickCell) => {
  const columnsWithFilters = getColumnsWithOnCellClick(
    COLUMNS_TABLE_BOX,
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
