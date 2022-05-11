/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { Button } from 'antd';

export const LIMIT_ROWS = 10;

export const getColumnsTableTechnicals = (
  // eslint-disable-next-line no-unused-vars
  linkedInventoryTechnical: (idTechnical: string) => () => void
): ColumnsType<any> => [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key'
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Apellido',
    dataIndex: 'lastName',
    key: 'lastName'
  },
  {
    title: 'Fecha de nacimiento',
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '',
    dataIndex: 'buttons',
    key: 'buttons',
    render: (_, row) => {
      return (
        <Button
          type="primary"
          size="small"
          onClick={linkedInventoryTechnical(row.key)}
        >
          Vincular
        </Button>
      );
    }
  }
];
