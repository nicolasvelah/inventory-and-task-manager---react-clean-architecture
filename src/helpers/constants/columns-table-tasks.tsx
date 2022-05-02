/* eslint-disable react/no-array-index-key */
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
import { FragmentValue } from '../../app/context/inventory/BoxContext/BoxContext';
import { stateCatalogType } from '../../domain/models/catalog';

export const LIMIT_ROWS = 10;

export const COLUMNS_TABLE_TASKS: ColumnsType<any> = [
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

export const COLUMNS_TABLE_CATEGORIES: ColumnsType<any> = [
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
    title: 'Categoría',
    dataIndex: 'category',
    key: 'category'
  },
  {
    title: 'Descripción categoría',
    dataIndex: 'categoryDescription',
    key: 'categoryDescription'
  },
  {
    title: 'Tipo de sitio',
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
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Marca',
    dataIndex: 'brand',
    key: 'brand'
  },
  {
    title: 'Modelo',
    dataIndex: 'referenceModel',
    key: 'referenceModel'
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category'
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
        {dataColected?.map(({ name, value }, index) => (
          <RenderItem label={name} value={value} key={index} />
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
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name'
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
        {dataColected?.map(({ name, value }, index) => (
          <RenderItem label={name} value={value} key={index} />
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
    children: [
      {
        title: 'Total del fragmento',
        dataIndex: 'totalFragment',
        key: 'totalFragment',
        width: 115,
        className: 'fragment',
        render: (totalFragments: FragmentValue[]) => (
          <table>
            <tbody>
              {totalFragments?.map((total, index) => {
                const value = `${total.value} ${total.unitOfMeasurement}`;
                return <tr key={`row_total_${index}`}><td>{value}</td></tr>;
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
              {remainingFragment?.map((remaining, index) => {
                const value = `${remaining.value} ${remaining.unitOfMeasurement}`;
                return <tr key={`row_remaining_${index}`}><td>{value}</td></tr>;
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
              {technicalFragment?.map((technical, index) => {
                const value = `${technical.value} ${technical.unitOfMeasurement}`;
                return <tr key={`row_technical_${index}`}><td>{value}</td></tr>;
              })}
            </tbody>
          </table>
        )
      }
    ]
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
