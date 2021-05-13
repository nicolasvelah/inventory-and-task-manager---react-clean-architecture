/* eslint-disable object-curly-newline */
import React from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';

import DependecyInjection from '../../../dependecy-injection';

const Login = () => {
  const history = useHistory();

  const { apiRepository } = DependecyInjection.getInstance();

  const initializeFirebaseSession = async (token: string) => {
    try {
      const respSign = await firebase.auth().signInWithCustomToken(token);
      console.log('userCredential -->', respSign);
      history.push('/task/list');
    } catch (error) {
      console.log('Erron en initializeSession', error.message);
    }
  };

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const dataLogin = {
      email: 'bjuanacio@pas-hq.com',
      password: '12345'
    };

    const resp = await apiRepository.login(dataLogin.email, dataLogin.password);
    if (!resp) {
      message.error('Usuario o contraseña incorrectas');
      return;
    }
    console.log('resp -->', resp);

    await initializeFirebaseSession(resp.token);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
