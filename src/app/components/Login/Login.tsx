/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';

import DependecyInjection from '../../../dependecy-injection';

import './login.scss';
import User from '../../../domain/models/user';
import { userGlobalContext } from '../../context/global/UserGlobalContext';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  const { apiRepository, firebaseAdminRepository } = DependecyInjection.getInstance();

  const { setUser } = userGlobalContext();

  const initializeFirebaseSession = async (token: string, user: User) => {
    const respSign = await firebaseAdminRepository.sign(token);
    if (respSign) {
      setUser(user);
      history.push('/task/list');
    } else {
      message.error('Usuario o contraseña incorrectas');
    }
  };

  const onFinish = async (values: { password: string; remember: boolean; username: string }) => {
    setLoading(true);

    const dataLogin = {
      email: values.username,
      password: values.password
    };
    const resp = await apiRepository.login(dataLogin.email, dataLogin.password);
    if (!resp) {
      message.error('Usuario o contraseña incorrectas');
      setLoading(false);
      return;
    }

    setLoading(false);

    await initializeFirebaseSession(resp.token, resp.user);
  };

  return (
    <div className="login">
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Correo"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} name="remember" valuePropName="checked">
          <Checkbox>Recordarme</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
          <Button type="primary" htmlType="submit" shape="round" loading={loading}>
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
