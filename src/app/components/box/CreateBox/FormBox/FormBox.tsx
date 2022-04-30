/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Form, Input, Select, Space, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import useFormBoxState from './state/useFormBoxState';

const FormBox: React.FC<{
  initValues?: object;
}> = ({ initValues }) => {
  const { catalog, onFinishForm } = useFormBoxState();

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
        <Select showSearch onSearch={() => {}}>
          {catalog.map((item) => (
            <Select.Option key={item._id} value={item._id}>
              {item.device}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Total de material"
        name="totalMaterial"
        rules={[{ required: true, message: 'Total de material es requerido' }]}
      >
        <InputNumber
          min={1}
          defaultValue={1}
        />
      </Form.Item>
      <Form.List
        name="dataCollected"
        rules={[{
          validator: async (_, names) => {
            if (!names || names.length < 1) {
              return Promise.reject(new Error('At least 1 identifier'));
            }
            return false;
          },
          message: 'Al menos un identifcador único es requerido'
        }]}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'name']}
                  rules={[{ required: true, message: 'Nombre del identificador es requerido' }]}
                >
                  <Input placeholder="Nombre del identificador." />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'value']}
                  rules={[{ required: true, message: 'Valor del identificador es requerido' }]}
                >
                  <Input placeholder="Valor del identificador" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Añadir identifcador único
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {!initValues ? 'GUARDAR' : 'Editar'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormBox;
