// eslint-disable-next-line object-curly-newline
import React, { createContext, FunctionComponent, useContext, useState } from 'react';
import User from '../../domain/models/user';

export type GlobalContent = {
  user: User | null;
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User | null) => void;
};
const MyUserGlobalContext = createContext<GlobalContent>({
  user: null,
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User | null) => {}
});

export const userGlobalContext = () => useContext(MyUserGlobalContext);

export const UserContextProvider: FunctionComponent<{}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <MyUserGlobalContext.Provider value={{ user, setUser }}>
      {children}
    </MyUserGlobalContext.Provider>
  );
};
