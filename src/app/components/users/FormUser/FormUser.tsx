import React from 'react';
import moment from 'moment';
// eslint-disable-next-line object-curly-newline
import { Button, Form, DatePicker, Select, Input, Radio } from 'antd';
import {
  UserRoleTranslateEnum,
  USER_ROLES_LIST
} from '../../../../domain/models/user';
import { FormUserProps } from './FormUser.interfaces';
import useFormUserState from './state/useFormUserState';

const FormUser: React.FC<FormUserProps> = ({ handleOk, initValues }) => {
  const {
    actions: { disabledDate, onFinish }
  } = useFormUserState({ handleOk, initValues });

  let initialValues;
  if (initValues) {
    initialValues = {
      ...initValues,
      dateOfBirth: moment(initValues.dateOfBirth),
      enabled: initValues.enabled ? 'SI' : 'NO'
    };
  }
  return (
    <Form
      initialValues={initialValues}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: 'Nombre es requerido' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Apellido"
        name="lastName"
        rules={[{ required: true, message: 'Apellido es requerido' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Fecha de nacimiento"
        name="dateOfBirth"
        rules={[
          { required: true, message: 'Fecha de nacimiento es requerido' }
        ]}
      >
        <DatePicker disabledDate={disabledDate} />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, type: 'email', message: 'Email es requerido' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Teléfono"
        name="phone"
        rules={[{ required: true, message: 'Teléfono es requerido' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Rol"
        name="role"
        rules={[{ required: true, message: 'Rol es requerido' }]}
      >
        <Select>
          {USER_ROLES_LIST.map((item) => (
            <Select.Option key={item} value={item}>
              {UserRoleTranslateEnum[item]}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Estado"
        name="enabled"
        rules={[{ required: true, message: 'Estado es requerido' }]}
      >
        <Radio.Group>
          <Radio.Button value="SI">Disponible</Radio.Button>
          <Radio.Button value="NO">No disponible</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {!initValues ? 'Crear' : 'Editar'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormUser;
