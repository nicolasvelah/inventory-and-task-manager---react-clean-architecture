import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Form, Input, Select } from 'antd';
import useFormInventoryState from './state/useFormInventoryState';

const FormPlace: React.FC<{
  initValues?: object;
}> = ({ initValues }) => {
  const { onFinishForm } = useFormInventoryState();

  return (
    <Form
      initialValues={initValues}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      onFinish={(values:any) => onFinishForm(values)}
      onValuesChange={() => {}}
      className="form"
    >
      <Form.Item
        label="Catálogo"
        name="catalogId"
        rules={[{ required: true, message: 'catálogo es requerido' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Estado"
        name="state"
        rules={[{ required: true, message: 'Estado es requerido' }]}
      >
        <Select showSearch onSearch={() => {}}>
          <Select.Option key="free" value="free">
            Libre
          </Select.Option>
          <Select.Option key="damaged" value="damaged">
            Dañado
          </Select.Option>
          <Select.Option key="onManteince" value="onManteince">
            En mantenimiento
          </Select.Option>
          <Select.Option key="unInstalled" value="unInstalled">
            Desinstalado
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Técnico"
        name="userId"
        rules={[{ required: true, message: 'Técnico es requerido' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Identificadores"
        name="dataCollected"
        rules={[{ required: true, message: 'Identificadores es requerido' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Fotos"
        name="photos"
        rules={[{ required: true, message: 'Fotos es requerido' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Municipio"
        name="municipality"
        rules={[{ required: true, message: 'Municipio es requerido' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {!initValues ? 'GUARDAR' : 'Editar'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormPlace;
