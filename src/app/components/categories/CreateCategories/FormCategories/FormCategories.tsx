import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Form, Input } from 'antd';
import useFormCatalogState from './state/useFormCategoriesState';

const FormCatalog: React.FC<{ initValues?: any }> = ({ initValues }) => {
  const {
    actions: { onFinishForm, onValuesChange }
  } = useFormCatalogState();

  return (
    <Form
      initialValues={initValues}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinishForm}
      onValuesChange={onValuesChange}
      className="form"
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: 'Nombre es requerido' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Descripción"
        name="description"
        rules={[{ required: true, message: 'Categoría es requerida' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="button-submit">
          {!initValues ? 'GUARDAR' : 'Editar'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormCatalog;
