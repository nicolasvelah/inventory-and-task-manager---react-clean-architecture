import React from 'react';
import MenuLayout from '../../layouts/MenuLayout/MenuLayout';
import { UserListContextProvider } from '../../context/user/UserListContext';
import UserListContainer from '../../containers/UserListContainer/UserListContainer';

import './user-page.scss';
import { KeysItemsMenuEnum } from '../../../helpers/enums/menu-layout-enum';

const UserPage: React.FC = () => {
  return (
    <MenuLayout menuItem={KeysItemsMenuEnum.USERS}>
      <UserListContextProvider>
        <UserListContainer />
      </UserListContextProvider>
    </MenuLayout>
  );
};

export default UserPage;
