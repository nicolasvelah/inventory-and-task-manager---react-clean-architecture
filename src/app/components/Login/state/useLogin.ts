import { message } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router';
import DependecyInjection from '../../../../dependecy-injection';
import User from '../../../../domain/models/user';
import { userGlobalContext } from '../../../context/global/UserGlobalContext';
import { UseLogin } from './useLogin.interfaces';

const useLogin: UseLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  const { apiRepository, firebaseAdminRepository } = DependecyInjection.getInstance();

  const { setUser } = userGlobalContext();

  const initializeFirebaseSession = async (token: string, user: User) => {
    try {
      await firebaseAdminRepository!.sign(token);
      setUser(user);
      history.push('/task/list');
    } catch (error) {
      message.error('Usuario o contraseña incorrectas');
    }
  };

  const onFinish = async (values: { password: string; remember: boolean; username: string }) => {
    setLoading(true);
    try {
      const dataLogin = {
        email: values.username,
        password: values.password
      };
      const resp = await apiRepository!.login(dataLogin.email, dataLogin.password);

      await initializeFirebaseSession(resp.token, resp.user);
    } catch (error) {
      message.error('Usuario o contraseña incorrectas');
    }
    setLoading(false);
  };

  return {
    actions: {
      onFinish
    },
    loading
  };
};

export default useLogin;
