import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../dependecy-injection';
import User, { UserRoleTranslateEnum } from '../../../../../domain/models/user';
import { localDate } from '../../../../../utils/moment-utils';
import { useUserListContext } from '../../../../context/user/UserListContext';
import { DataUser } from './useTableUsersState.interfaces';

const useTableUsersState = () => {
  const [data, setData] = useState<DataUser[]>([]);

  const [viewModal, setViewModal] = useState<boolean>(false);
  const [valueToEdit, setValueToEdit] = useState<User | null>(null);

  const { users, setUsers } = useUserListContext();
  const { usersRepository } = repository;

  useEffect(() => {
    const newData: DataUser[] = users.map((user) => ({
      key: user._id!,
      name: user.name,
      lastName: user.lastName,
      dateOfBirth: localDate(user.dateOfBirth),
      email: user.email,
      phone: user.phone,
      role: UserRoleTranslateEnum[user.role],
      enabled: user.enabled ? 'Disponible' : 'No disponible',
      createdAt: user.createdAt ? localDate(user.createdAt) : '',
      data: user
    }));
    setData(newData);
  }, [users]);

  const handleEdit = (userToEdit: User) => {
    setValueToEdit(userToEdit);
    setViewModal(true);
  };

  const handleDelete = (id: string) => {
    const hide = message.loading('Eliminando usuario');
    usersRepository
      ?.delete(id)
      .then((deleted) => {
        if (deleted) {
          const newUsers = users.filter((item) => item._id !== id);
          setUsers(newUsers);
        }
      })
      .finally(() => {
        hide();
      });
  };

  const openModal = () => setViewModal(true);
  const closeModal = () => setViewModal(false);

  return {
    dataTable: data,
    viewModal,
    valueToEdit,
    actions: {
      handleEdit,
      handleDelete,
      openModal,
      closeModal
    }
  };
};

export default useTableUsersState;
