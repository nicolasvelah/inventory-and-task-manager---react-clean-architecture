import React, { FunctionComponent } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Popover } from 'antd';

import Permissions from '../../../utils/permissions-user';
import User from '../../../domain/models/user';

const MyProfile: FunctionComponent<{ user: User }> = ({ user }) => {
  const firstCharacter = (word: string) => word.charAt(0).toUpperCase();

  const actualPermission = Permissions[user.role];

  const renderContentPopover = (
    <div>
      <b>
        {`${user.name} ${user.lastName}`}
      </b>
      <br />
      <span>{user.email}</span>
      <br />
      <span>{actualPermission.translate}</span>
    </div>
  );

  return (
    <div>
      <Popover placement="bottomLeft" content={renderContentPopover} trigger="click">
        <div>
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}>
            {firstCharacter(user.name)}
            {firstCharacter(user.lastName)}
          </Avatar>
          <DownOutlined style={{ fontSize: '10px', marginLeft: 5 }} />
        </div>
      </Popover>
    </div>
  );
};

export default MyProfile;
