import { useState } from 'react';
import User from '../../../../../domain/models/user';
import { useUserListContext } from '../../../../context/user/UserListContext';

const useCreateUserState = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { users, setUsers } = useUserListContext();

  const handleOk = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleAddNewUser = (user: User) => {
    setUsers([user, ...users]);
  };

  return {
    visible,
    actions: {
      handleOk,
      handleCancel,
      handleAddNewUser
    }
  };
};

export default useCreateUserState;
