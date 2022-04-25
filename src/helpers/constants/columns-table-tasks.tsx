/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { Button, Space, Tag } from 'antd';
import { DataUser } from '../../app/components/users/TableUsers/state/useTableUsersState.interfaces';
import { userRolesType, UserRoleTranslateEnum } from '../../domain/models/user';
import {
  BOX_STATE_COLOR_AND_NAME,
  INVENTORY_STATE_COLOR_AND_NAME
} from './inventory';
import {
  DataCollectedInventory,
  inventoryStateType
} from '../../domain/models/inventory';
import RenderItem from '../../app/components/generic/render-item/RenderItem';
import { FragmentBoxTable } from '../../app/context/inventory/BoxContext/BoxContext';
import { stateCatalogType } from '../../domain/models/catalog';

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

export const COLUMNS_TABLE_INVENTORY: ColumnsType<any> = [
  {
    title: 'Id Equipo',
    dataIndex: 'key',
    key: 'key',
    width: 150
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type'
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
    )
  },
  {
    title: 'Técnico',
    dataIndex: 'technical',
    key: 'technical'
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
        {dataColected?.map(({ name, value }) => (
          <RenderItem label={name} value={value} />
        ))}
      </>
    )
  },
  {
    title: 'Id Tarea',
    dataIndex: 'idTask',
    key: 'idTask'
  },
  {
    title: 'Fecha',
    dataIndex: 'date',
    key: 'date'
  }
];

export const COLUMNS_TABLE_BOX: ColumnsType<any> = [
  {
    title: 'Id Equipo',
    dataIndex: 'key',
    key: 'key',
    width: 250
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
        {dataColected?.map(({ name, value }) => (
          <RenderItem label={name} value={value} />
        ))}
      </>
    )
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    width: 150
  },
  {
    title: 'Restante',
    dataIndex: 'remaining',
    key: 'remaining',
    width: 150
  },
  {
    title: 'Fragmentos',
    dataIndex: 'fragment',
    key: 'fragment',
    width: 400,
    render: (fragments: FragmentBoxTable[]) => (
      <>
        {fragments?.map(
          ({ total, remaining, technical, unitOfMeasurement }) => {
            const technicalString = technical ? `| ${technical}` : '';
            const unitOfMeasurementString = unitOfMeasurement ?? '';

            return (
              <div>{` ${total} ${unitOfMeasurementString} | usado ${remaining} ${unitOfMeasurementString} ${technicalString}`}</div>
            );
          }
        )}
      </>
    )
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
            Fragmenta
          </Button>
          <Button type="primary" size="small">
            Ver
          </Button>
        </Space>
      );
    }
  }
];

export const getColumnsTableUser = (
  // eslint-disable-next-line no-unused-vars
  valuesToEdit: (values: DataUser) => void
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
    title: 'Rol',
    dataIndex: 'role',
    key: 'role',
    render: (text: userRolesType) => {
      // eslint-disable-next-line react/jsx-one-expression-per-line
      return <b> {UserRoleTranslateEnum[text]}</b>;
    }
  },
  {
    title: 'Estado',
    dataIndex: 'enabled',
    key: 'enabled'
  },
  {
    title: 'Fecha de creación',
    dataIndex: 'createdAt',
    key: 'createdAt'
  },
  {
    title: '',
    dataIndex: 'buttons',
    key: 'buttons',
    render: (_, row) => {
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              marginBottom: 5,
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Button
              type="primary"
              size="small"
              onClick={() => {
                valuesToEdit(row);
              }}
            >
              Editar
            </Button>
            <Button type="primary" size="small">
              Eliminar
            </Button>
          </div>
          <Button type="primary" size="small">
            Reenviar mail clave
          </Button>
        </div>
      );
    }
  }
];

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
