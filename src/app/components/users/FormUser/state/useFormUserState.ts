import { message } from 'antd';
import moment, { Moment } from 'moment';
import { repository } from '../../../../../dependecy-injection';
import User from '../../../../../domain/models/user';
import { UseFormUserState } from './useFormUserState.interfaces';

const useFormUserState: UseFormUserState = ({ handleOk, initValues }) => {
  const { usersRepository } = repository;

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
        handleOk(userUpdated!);
      })
      .catch(() => {
        message.error('No se pudo actualizar el usuario');
      })
      .finally(() => {
        hide();
      });
  };

  const createUser = (userToCreate: Partial<User>) => {
    console.log('userToCreate -->', userToCreate);
    const hide = message.loading('Creando usuario ...');
    usersRepository
      ?.create(userToCreate)
      .then((userUpdated) => {
        message.success('Usuario creado');
        handleOk(userUpdated!);
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
      updateUser(initValues.id, payloadUser);

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
