import React from 'react';
import { Layout } from 'antd';

import MyProfile from '../../../components/my-profile/MyProfile';
import User from '../../../../domain/models/user';

const { Header } = Layout;

const HeaderMenuLayout: React.FC<{ user: User | null }> = ({ user }) => {
  return (
    <Header className="content-header">
      <div>LOGO</div>
      {user && <MyProfile user={user} />}
    </Header>
  );
};

export default HeaderMenuLayout;
