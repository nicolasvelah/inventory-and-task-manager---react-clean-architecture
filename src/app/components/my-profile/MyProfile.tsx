import { Button, Popover } from 'antd';
import React, { FunctionComponent } from 'react';
import User from '../../../domain/models/user';

const MyProfile: FunctionComponent<{ user: User }> = ({ user }) => {
  return (
    <div>
      <Popover
        placement="bottom"
        content={<div>{user.name}</div>}
        trigger="click"
      >
        <Button>My perfil</Button>
      </Popover>
    </div>
  );
};

export default MyProfile;
