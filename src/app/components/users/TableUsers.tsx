/* eslint-disable no-underscore-dangle */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import User, { userRolesType } from '../../../domain/models/user';
import FormUser from './FormUser';
import FormUserInterface from '../../../domain/models/generic/form-user-interface';
import { localDate } from '../../../utils/moment-utils';
// import permissions from '../../../utils/permissions-user';

interface DataUser {
  key: string;
  name: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  role: userRolesType;
  enabled: string;
  createdAt: string;
}

const TableUsers: FunctionComponent<{ users: User[] }> = ({ users }) => {
  const [data, setData] = useState<DataUser[]>([]);

  const [visibleModalEdit, setVisibleModalEdit] = useState<boolean>(false);
  const [valuesEdit, setValuesEdit] = useState<FormUserInterface | null>(null);

  useEffect(() => {
    const newData: DataUser[] = users.map((user) => ({
      key: user._id!,
      name: user.name,
      lastName: user.lastName,
      dateOfBirth: localDate(user.dateOfBirth),
      email: user.email,
      phone: user.phone,
      role: user.role,
      enabled: user.enabled ? 'Disponible' : 'No disponible',
      createdAt: user.createdAt ? localDate(user.createdAt) : ''
    }));
    setData(newData);
  }, [users]);

  const handleOkModalEdit = () => {
    setVisibleModalEdit(true);
  };

  const handleCancelModalEdit = () => {
    setVisibleModalEdit(false);
    setValuesEdit(null);
  };

  const valuesToEdit = (values: DataUser) => {
    const valuesUser: FormUserInterface = {
      id: values.key,
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      dateOfBirth: values.dateOfBirth,
      enabled: values.enabled === 'Disponible',
      role: values.role as userRolesType
    };
    console.log('valuesUser -->', valuesUser);
    setValuesEdit(valuesUser);
    handleOkModalEdit();
  };

  const handleOk = (user: User | null) => {
    if (user) {
      setData((prevState) => {
        const copy = prevState.map((item) => {
          let itemUser = { ...item };
          if (item.key === user._id) {
            itemUser = {
              key: user._id,
              name: user.name,
              lastName: user.lastName,
              dateOfBirth: localDate(user.dateOfBirth),
              email: user.email,
              phone: user.phone,
              role: user.role,
              enabled: user.enabled ? 'Disponible' : 'No disponible',
              createdAt: user.createdAt ? localDate(user.createdAt) : ''
            };
          }
          return itemUser;
        });
        return copy;
      });
    }
  };

  const columns: ColumnsType<any> = [
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
      render: (text: string) => <b>{`permissions[text]?.translate ?? ''${text}`}</b>
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
            <div style={{ marginBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
              <Button
                type="primary"
                size="small"
                onClick={() => {
                  console.log('row -->', row);
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
  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: 1100 }} />
      <Modal
        title="Editar usuario"
        visible={visibleModalEdit}
        onOk={handleOkModalEdit}
        onCancel={handleCancelModalEdit}
        destroyOnClose
        footer={null}
      >
        {valuesEdit && <FormUser initValues={valuesEdit ?? undefined} handleOk={handleOk} />}
      </Modal>
    </div>
  );
};

export default TableUsers;
