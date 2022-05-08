import { message } from 'antd';
import moment, { Moment } from 'moment';
import { repository } from '../../../../../dependecy-injection';
import User from '../../../../../domain/models/user';
import { useUserListContext } from '../../../../context/user/UserListContext';
import { UseFormUserState } from './useFormUserState.interfaces';

const useFormUserState: UseFormUserState = ({ initValues }) => {
  const { usersRepository } = repository;

  const { users, setUsers } = useUserListContext();

  const disabledDate = (current: Moment) => {
    const years = moment().diff(current, 'years');
    if (years < 18) return true;
    return false;
  };

  const updateUser = (id: string, userToUpdate: Partial<User>) => {
    const hide = message.loading('Actualizando usuario ...');
    usersRepository
      ?.update(id, userToUpdate)
      .then((userUpdated) => {
        message.success('Usuario actualizado');
        const newUsers = users.map((item) => {
          if (item._id === userUpdated._id) {
            return userUpdated;
          }

          return item;
        });
        setUsers(newUsers);
      })
      .catch(() => {
        message.error('No se pudo actualizar el usuario');
      })
      .finally(() => {
        hide();
      });
  };

  const createUser = (userToCreate: Partial<User>) => {
    const hide = message.loading('Creando usuario ...');
    usersRepository
      ?.create(userToCreate)
      .then((userCreated) => {
        message.success('Usuario creado');
        setUsers([userCreated, ...users]);
      })
      .catch(() => {
        message.error('No se pudo crear el usuario');
      })
      .finally(() => {
        hide();
      });
  };

  const onFinish = async (values: any) => {
    const payloadUser = {
      ...values,
      dateOfBirth: (values.dateOfBirth as Moment).format('YYYY-MM-DD'),
      enabled: values.enabled === 'SI'
    };

    if (initValues) {
      updateUser(initValues._id, payloadUser);

      return;
    }
    createUser(payloadUser);
  };

  return {
    actions: {
      disabledDate,
      onFinish
    }
  };
};

export default useFormUserState;
