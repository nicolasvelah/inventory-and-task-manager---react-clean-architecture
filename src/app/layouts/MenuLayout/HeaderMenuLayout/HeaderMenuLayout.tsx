import React from 'react';
import { Layout } from 'antd';

import MyProfile from '../../../components/my-profile/MyProfile';
import User from '../../../../domain/models/user';
import { ReactComponent as Logo } from './images/logo.svg';

const { Header } = Layout;

const HeaderMenuLayout: React.FC<{ user: User | null }> = ({ user }) => {
  return (
    <Header className="content-header">
      <Logo className="logo" />
      {user && <MyProfile user={user} />}
    </Header>
  );
};

export default HeaderMenuLayout;
