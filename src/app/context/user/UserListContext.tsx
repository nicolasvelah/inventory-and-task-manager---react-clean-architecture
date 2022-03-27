/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import User from '../../../domain/models/user';

type UserListContent = {
  users: User[];
  setUsers: (newUsers: User[]) => void;
};
const UserListContext = createContext<UserListContent>({
  users: [],
  setUsers: (newUsers: User[]) => {}
});

export const useUserListContext = () => useContext(UserListContext);

export const UserListContextProvider: React.FC = ({ children }) => {
  const [users, setCurrentUsers] = useState<User[]>([]);

  return (
    <UserListContext.Provider
      value={{
        users,
        setUsers: (newUsers: User[]) => {
          setCurrentUsers(newUsers);
        }
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};
