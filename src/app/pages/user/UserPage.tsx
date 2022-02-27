import React, { useState, useEffect } from 'react';
import MenuLayout from '../../layouts/MenuLayout/MenuLayout';
import TableUsers from '../../components/users/TableUsers';
import User from '../../../domain/models/user';
import DependecyInjection from '../../../dependecy-injection';
import SearchUsers from '../../components/users/SearchUsers';
import CreateUser from '../../components/users/CreateUser';

import './user-page.scss';

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const { usersRepository } = DependecyInjection.getInstance();

  useEffect(() => {
    usersRepository!.getCoordinatorsAndTechnicals().then((usersList) => {
      console.log('usersList -->', usersList);
      setUsers(usersList);
    });
  }, []);

  const setUsersList = (newUsers: User[]) => {
    setUsers(newUsers);
  };

  const addNewUser = (user: User) => {
    setUsers((prevState) => [user, ...prevState]);
  };

  return (
    <MenuLayout menuItem="Usuarios">
      <div className="user-page">
        Usuarios
        <div className="header">
          <SearchUsers setUsers={setUsersList} />
          <CreateUser addNewUser={addNewUser} />
        </div>
        <TableUsers users={users} />
      </div>
    </MenuLayout>
  );
};

export default UserPage;
