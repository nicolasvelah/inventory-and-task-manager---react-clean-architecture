/* eslint-disable object-curly-newline */
import React, { useMemo } from 'react';
import { Button, Card, Form, Input, Result } from 'antd';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';
import './reset-pass.scss';
import useResetPass from './state/useResetPass';

const { Meta } = Card;

const ResetPassPage: React.FC = () => {
  const {
    actions: { onFinish },
    loading,
    isPasswordReseted,
    email
  } = useResetPass();

  const cover = useMemo(
    () => (
      <div
        style={{
          padding: 10,
          backgroundColor: '#3E4074'
        }}
      >
        <Logo />
      </div>
    ),
    []
  );

  return (
    <div className="container-reset">
      <Card className="reset-card" cover={cover}>
        {isPasswordReseted ? (
          <Result
            status="success"
            title="Tu contraseña ha sido configurada"
            extra={[
              <Button type="primary" key="console" href="/login">
                Ir a la página pricipal
              </Button>
            ]}
          />
        ) : (
          <>
            <Meta
              style={{
                textAlign: 'center',
                marginBottom: 15
              }}
              title="Configurar contraseña"
              description={`Pon tu nueva contraseña para ${email}`}
            />
            <Form
              labelCol={{
                xs: { span: 10 },
                sm: { span: 10 }
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
                label="Contraseña"
                name="password"
                rules={[
                  { required: true, message: 'Porfavor ingresa una contraseña' }
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Confirmar contraseña"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: 'Porfavor ingresa una contraseña'
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error('Las dos contraseñas no coinciden.')
                      );
                    }
                  })
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  xs: { offset: 11, span: 13 },
                  sm: { offset: 10, span: 14 }
                }}
              >
                <Button type="primary" htmlType="submit" loading={loading}>
                  Configurar
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
      </Card>
    </div>
  );
};

export default ResetPassPage;
