import React from 'react';
import { DownOutlined } from '@ant-design/icons';
// eslint-disable-next-line object-curly-newline
import { Avatar, Popover, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';

import Permissions from '../../../utils/permissions-user';
import User from '../../../domain/models/user';
import DependecyInjection from '../../../dependecy-injection';
import SocketClient from '../../../helpers/socket-client';

const MyProfile: React.FC<{ user: User }> = ({ user }) => {
  const { firebaseAdminRepository } = DependecyInjection.getInstance();
  const history = useHistory();

  const firstCharacter = (word: string) => word.charAt(0).toUpperCase();

  const actualPermission = Permissions[user.role];

  const signOut = async () => {
    const resp = await firebaseAdminRepository!.signOut();
    if (resp) {
      // Sign-out successful.
      history.push('/login');
      SocketClient.getInstance().disconnect();
    } else {
      message.error(
        'La solicitud no pudo ser finalizada. Vuelve a intentarlo.'
      );
    }
  };

  const renderContentPopover = (
    <div>
      <b>{`${user.name} ${user.lastName}`}</b>
      <br />
      <span>{user.email}</span>
      <br />
      <span>{actualPermission.translate}</span>
      <br />
      <Button onClick={signOut}>Log Out</Button>
    </div>
  );

  return (
    <div>
      <Popover
        placement="bottomLeft"
        content={renderContentPopover}
        trigger="click"
      >
        <div>
          <Avatar
            style={{
              fontSize: '10px',
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              cursor: 'pointer'
            }}
          >
            {firstCharacter(user.name)}
            {firstCharacter(user.lastName)}
          </Avatar>
          <DownOutlined style={{ fontSize: '10px', marginLeft: 5, color: '#fff' }} />
        </div>
      </Popover>
    </div>
  );
};

export default MyProfile;
