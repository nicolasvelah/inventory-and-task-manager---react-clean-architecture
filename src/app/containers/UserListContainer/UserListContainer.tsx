import { Button, Space } from 'antd';
import React from 'react';
import HeaderList from '../../components/generic/header-list/HeaderList';
import CreateUser from '../../components/users/CreateUser/CreateUser';
import TableUsers from '../../components/users/TableUsers/TableUsers';
import useUserListState from './state/useUserListState';

const UserListContainer: React.FC = () => {
  const {
    actions: { handleChangeFilters }
  } = useUserListState();

  return (
    <div className="user-page">
      Usuarios
      <div className="header">
        <div className="header-first-block">
          <HeaderList
            handleChangeFilters={handleChangeFilters}
            showRangePicker={false}
            placeHolder="Buscar usuario por nombre, apellido o email"
          />
        </div>
        <Space>
          <Button>Excel</Button>
          <CreateUser />
        </Space>
      </div>
      <TableUsers />
    </div>
  );
};

export default UserListContainer;
