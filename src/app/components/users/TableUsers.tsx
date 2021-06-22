/* eslint-disable no-underscore-dangle */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import { ColumnsType } from 'antd/lib/table';
import User from '../../../domain/models/user';

interface DataUser {
  key: string;
  name: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  role: string;
  enabled: string;
  createdAt: string;
}

const formatDate = 'DD/MM/YYYY HH:mm:ss';

function momentFormat(date: string) {
  return moment.utc(date).format(formatDate);
}

const TableUsers: FunctionComponent<{ users: User[] }> = ({ users }) => {
  const [data, setData] = useState<DataUser[]>([]);

  useEffect(() => {
    const newData: DataUser[] = users.map((user) => ({
      key: user._id,
      name: user.name,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      email: user.email,
      phone: user.phone,
      role: user.role,
      enabled: user.enabled ? 'Habilitado' : 'Deshabilitado',
      createdAt: user.createdAt ? momentFormat(user.createdAt) : ''
    }));
    setData(newData);
  }, [users]);

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
      key: 'role'
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
    }
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: 1100 }} />
    </div>
  );
};

export default TableUsers;
