import React, { FunctionComponent } from 'react';
import moment, { Moment } from 'moment';
// eslint-disable-next-line object-curly-newline
import { Button, Form, DatePicker, Select, Input, Radio, message } from 'antd';
import User, { USER_ROLES_LIST } from '../../../domain/models/user';
import FormUserInterface from '../../../domain/models/generic/form-user-interface';
// import permissions from '../../../utils/permissions-user';
import DependecyInjection from '../../../dependecy-injection';

const FormUser: FunctionComponent<{
  // eslint-disable-next-line no-unused-vars
  handleOk: (user: User) => void;
  initValues?: FormUserInterface;
}> = ({ handleOk, initValues }) => {
  const { usersRepository } = DependecyInjection.getInstance();

  const disabledDate = (current: Moment) => {
    const years = moment().diff(current, 'years');
    if (years < 18) return true;
    return false;
  };

  const onFinish = async (values: any) => {
    try {
      const newUser = {
        ...values,
        dateOfBirth: (values.dateOfBirth as Moment).format('YYYY-MM-DD'),
        enabled: values.enabled === 'SI'
      };
      if (initValues) {
        const userUpdated = await usersRepository!.update(
          initValues.id,
          newUser
        );
        handleOk(userUpdated!);
      }
    } catch (error) {
      message.error('Error al crear usuario');
    }
  };

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
            <>
              {/* <Select.Option key={item}>{permissions[item]?.translate as string}
              </Select.Option>
              */}
              <Select.Option key={item} value={item}>
                <span>Optio_TEST</span>
              </Select.Option>
            </>
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
