/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Form, Input, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import useFormInventoryState from './state/useFormInventoryState';
import Inventory from '../../../../../../domain/models/inventory';

const FormInventory: React.FC<{
  initValues?: Inventory;
}> = ({ initValues }) => {
  const { catalog, onFinishForm } = useFormInventoryState(initValues);

  const device =
    typeof initValues?.device === 'string'
      ? initValues.device
      : initValues?.device._id;
  return (
    <Form
      initialValues={{ ...initValues, device }}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      onFinish={(values: any) => onFinishForm(values)}
      onValuesChange={() => {}}
      className="form"
    >
      <Form.Item
        label="Catálogo"
        name="device"
        rules={[{ required: true, message: 'catálogo es requerido' }]}
      >
        <Select showSearch>
          {catalog.map((item) => (
            <Select.Option key={item._id} value={item._id}>
              {item.device}
            </Select.Option>
          ))}
        </Select>
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
      <Form.List
        name="dataCollected"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 1) {
                return Promise.reject(new Error('At least 1 identifier'));
              }
              return false;
            },
            message: 'Al menos un identifcador único es requerido'
          }
        ]}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  marginBottom: 8,
                  justifyContent: 'center'
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'name']}
                  rules={[
                    {
                      required: true,
                      message: 'Nombre del identificador es requerido'
                    }
                  ]}
                >
                  <Input placeholder="Nombre del identificador." />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'value']}
                  rules={[
                    {
                      required: true,
                      message: 'Valor del identificador es requerido'
                    }
                  ]}
                >
                  <Input placeholder="Valor del identificador" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
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

export default FormInventory;
