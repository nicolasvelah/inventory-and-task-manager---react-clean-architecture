import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Form, Select } from 'antd';
import useFormCatalogState from './state/useFormCatalogState';

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
        label="Estado"
        name="state"
        rules={[{ required: true, message: 'Estado es requerido' }]}
      >
        <Select showSearch onSearch={() => {}}>
          {([] as { _id: string }[]).map((item) => (
            <Select.Option key={item._id} value={item._id}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Equipo"
        name="device"
        rules={[{ required: true, message: 'Equipo es requerido' }]}
      >
        <Select showSearch onSearch={() => {}}>
          {([] as { _id: string }[]).map((item) => (
            <Select.Option key={item._id} value={item._id}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Marca"
        name="brand"
        rules={[{ required: true, message: 'Marca es requerido' }]}
      >
        <Select showSearch onSearch={() => {}}>
          {([] as { _id: string }[]).map((item) => (
            <Select.Option key={item._id} value={item._id}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Modelo"
        name="referenceModel"
        rules={[{ required: true, message: 'Modelo es requerido' }]}
      >
        <Select showSearch onSearch={() => {}}>
          {([] as { _id: string }[]).map((item) => (
            <Select.Option key={item._id} value={item._id}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Tipo"
        name="type"
        rules={[{ required: true, message: 'Tipo es requerido' }]}
      >
        <Select showSearch onSearch={() => {}}>
          {([] as { _id: string }[]).map((item) => (
            <Select.Option key={item._id} value={item._id}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Unidad"
        name="unitOfMeasurement"
        rules={[{ required: true, message: 'Unidad es requerida' }]}
      >
        <Select showSearch onSearch={() => {}}>
          {([] as { _id: string }[]).map((item) => (
            <Select.Option key={item._id} value={item._id}>
              {item}
            </Select.Option>
          ))}
        </Select>
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
