/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';

import DependecyInjection from '../../../dependecy-injection';

import './login.scss';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  const { apiRepository, firebaseAdminRepository } = DependecyInjection.getInstance();

  const initializeFirebaseSession = async (token: string) => {
    const respSign = await firebaseAdminRepository.sign(token);
    if (respSign) {
      console.log('userCredential -->', respSign);
      history.push('/task/list');
    } else {
      message.error('Usuario o contraseña incorrectas');
    }
  };

  const onFinish = async (values: { password: string; remember: boolean; username: string }) => {
    setLoading(true);
    console.log('Success:', values);
    /* const dataLogin = {
      email: 'bjuanacio@pas-hq.com',
      password: '12345'
    }; */
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
    console.log('resp -->', resp);
    setLoading(false);
    await initializeFirebaseSession(resp.token);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
