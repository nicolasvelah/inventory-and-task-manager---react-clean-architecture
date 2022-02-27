/* eslint-disable object-curly-newline */
import React from 'react';
import { Form, Input, Button } from 'antd';

import './login.scss';
import useLogin from './state/useLogin';

const Login = () => {
  const {
    actions: { onFinish },
    loading
  } = useLogin();

  return (
    <div className="login">
      <Form
        labelCol={{
          xs: { span: 5 },
          sm: { span: 5 }
        }}
        wrapperCol={{
          xs: { span: 19 },
          sm: { span: 19 }
        }}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
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

        <Form.Item
          wrapperCol={{
            xs: { offset: 11, span: 13 },
            sm: { offset: 10, span: 14 }
          }}
        >
          <Button type="primary" htmlType="submit" shape="round" loading={loading}>
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
