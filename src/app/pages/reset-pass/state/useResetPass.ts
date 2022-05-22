import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { repository } from '../../../../dependecy-injection';

const useResetPass = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordReseted, setIsPasswordReseted] = useState<boolean>(false);

  const history = useHistory();
  const { token, email } = useParams<{ token: string; email: string }>();

  const { usersRepository } = repository;

  useEffect(() => {
    if (!token || !email) {
      history.push('/404');
    }
  }, []);

  const onFinish = (values: { password: string; confirmPassword: string }) => {
    setLoading(true);
    const { password, confirmPassword } = values;

    usersRepository
      ?.updatePass({
        password,
        confirmPassword,
        email,
        token
      })
      .then(() => {
        setIsPasswordReseted(true);
      })
      .catch(() => {
        message.error('No se pudo configurar la contraseña.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    actions: {
      onFinish
    },
    loading,
    isPasswordReseted,
    email
  };
};

export default useResetPass;
