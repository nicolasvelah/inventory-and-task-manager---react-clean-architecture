import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { Button, Space } from 'antd';

export const LIMIT_ROWS = 10;

export const COLUMNS_TABLE_TASKS: ColumnsType<any> = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key'
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

export const COLUMNS_TABLE_PLACES: ColumnsType<any> = [
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
    title: 'Calle Principal',
    dataIndex: 'mainStreet',
    key: 'mainStreet'
  },
  {
    title: 'Número de casa',
    dataIndex: 'addressNumber',
    key: 'addressNumber'
  },
  {
    title: 'Colonia',
    dataIndex: 'colony',
    key: 'colony'
  },
  {
    title: 'Municipio',
    dataIndex: 'municipality',
    key: 'municipality'
  },
  {
    title: 'Ciudad',
    dataIndex: 'city',
    key: 'city'
  },
  {
    title: 'Provincia',
    dataIndex: 'state',
    key: 'state'
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'Fecha',
    dataIndex: 'createdAt',
    key: 'createdAt'
  }
];

export const COLUMNS_TABLE_CATALOG: ColumnsType<any> = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
    width: 150
  },
  {
    title: 'Equipo',
    dataIndex: 'device',
    key: 'device',
    width: 250
  },
  {
    title: 'Marca',
    dataIndex: 'brand',
    key: 'brand'
  },
  {
    title: 'Modelo',
    dataIndex: 'model',
    key: 'model'
  },
  {
    title: 'Interfaz',
    dataIndex: 'interface',
    key: 'interface'
  },
  {
    title: 'Tpipo de sitio',
    dataIndex: 'placeType',
    key: 'placeType',
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
  },
  {
    title: '',
    dataIndex: 'buttons',
    key: 'buttons',
    width: 150,
    render: () => {
      return (
        <Space>
          <Button type="primary" size="small" onClick={() => {}}>
            Editar
          </Button>
          <Button type="primary" size="small">
            Eliminar
          </Button>
        </Space>
      );
    }
  }
];
