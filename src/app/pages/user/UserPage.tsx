import { Button } from 'antd';

import React, { useState, useEffect } from 'react';
import MenuLayout from '../../layouts/MenuLayout';
import TableUsers from '../../components/users/TableUsers';
import User from '../../../domain/models/user';
import DependecyInjection from '../../../dependecy-injection';

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const { usersRepository } = DependecyInjection.getInstance();

  useEffect(() => {
    usersRepository.getCoordinatorsAndTechnicals().then((usersList) => {
      console.log('usersList -->', usersList);
      setUsers(usersList);
    });
  }, []);

  return (
    <MenuLayout menuItem="Usuarios">
      <div className="user-page">
        Usuarios
        <div className="header">
          <div className="header-first-block">
            {/* <RangeDate setTasks={setTaskList} inUse={searchType === 'range'} /> */}
            {/* <SearchTasks setTasks={setTaskList} inUse={searchType === 'search'} /> */}
          </div>
          <Button>Crear</Button>
        </div>
        <TableUsers users={users} />
      </div>
    </MenuLayout>
  );
};

export default UserPage;
