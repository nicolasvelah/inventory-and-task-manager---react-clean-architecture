import { Button } from 'antd';

import React, { useState, useEffect } from 'react';
import MenuLayout from '../../layouts/MenuLayout';
import TableUsers from '../../components/users/TableUsers';
import User from '../../../domain/models/user';
import DependecyInjection from '../../../dependecy-injection';
import SearchUsers from '../../components/users/SearchUsers';

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const { usersRepository } = DependecyInjection.getInstance();

  useEffect(() => {
    usersRepository.getCoordinatorsAndTechnicals().then((usersList) => {
      console.log('usersList -->', usersList);
      setUsers(usersList);
    });
  }, []);

  const setUsersList = (newUsers: User[]) => {
    setUsers(newUsers);
  };

  return (
    <MenuLayout menuItem="Usuarios">
      <div className="user-page">
        Usuarios
        <div className="header">
          <div className="header-first-block">
            {/* <RangeDate setTasks={setTaskList} inUse={searchType === 'range'} /> */}
            <SearchUsers setUsers={setUsersList} />
          </div>
          <Button>Crear</Button>
        </div>
        <TableUsers users={users} />
      </div>
    </MenuLayout>
  );
};

export default UserPage;
