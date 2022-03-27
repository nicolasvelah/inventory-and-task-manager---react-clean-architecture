import { useEffect, useState } from 'react';
import User, { userRolesType } from '../../../../../domain/models/user';
import { localDate } from '../../../../../utils/moment-utils';
import { useUserListContext } from '../../../../context/user/UserListContext';
import { DataUser, FormUserInterface } from './useTableUsersState.interfaces';

const useTableUsersState = () => {
  const [data, setData] = useState<DataUser[]>([]);

  const [visibleModalEdit, setVisibleModalEdit] = useState<boolean>(false);
  const [valuesEdit, setValuesEdit] = useState<FormUserInterface | null>(null);

  const { users } = useUserListContext();

  useEffect(() => {
    const newData: DataUser[] = users.map((user) => ({
      key: user._id!,
      name: user.name,
      lastName: user.lastName,
      dateOfBirth: localDate(user.dateOfBirth),
      email: user.email,
      phone: user.phone,
      role: user.role,
      enabled: user.enabled ? 'Disponible' : 'No disponible',
      createdAt: user.createdAt ? localDate(user.createdAt) : ''
    }));
    setData(newData);
  }, [users]);

  const handleOkModalEdit = () => {
    setVisibleModalEdit(true);
  };

  const handleCancelModalEdit = () => {
    setVisibleModalEdit(false);
    setValuesEdit(null);
  };

  const valuesToEdit = (values: DataUser) => {
    const valuesUser: FormUserInterface = {
      id: values.key,
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      dateOfBirth: values.dateOfBirth,
      enabled: values.enabled === 'Disponible',
      role: values.role as userRolesType
    };
    setValuesEdit(valuesUser);
    handleOkModalEdit();
  };

  const handleOk = (user: User | null) => {
    if (user) {
      setData((prevState) => {
        const copy = prevState.map((item) => {
          let itemUser = { ...item };
          if (item.key === user._id) {
            itemUser = {
              key: user._id,
              name: user.name,
              lastName: user.lastName,
              dateOfBirth: localDate(user.dateOfBirth),
              email: user.email,
              phone: user.phone,
              role: user.role,
              enabled: user.enabled ? 'Disponible' : 'No disponible',
              createdAt: user.createdAt ? localDate(user.createdAt) : ''
            };
          }
          return itemUser;
        });
        return copy;
      });
    }
  };

  return {
    dataTable: data,
    visibleModalEdit,
    valuesEdit,
    actions: {
      handleCancelModalEdit,
      handleOkModalEdit,
      handleOk,
      valuesToEdit
    }
  };
};

export default useTableUsersState;
