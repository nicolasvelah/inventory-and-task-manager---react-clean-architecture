/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Form, Select, Input, Button } from 'antd';
import useFormCatalogState from './state/useFormCatalogState';
import Catalog from '../../../../../domain/models/catalog';

const FormCatalog: React.FC<{ initValues?: Catalog }> = ({ initValues }) => {
  const {
    form,
    categories,
    isControlled,
    actions: { onFinishForm, onValuesChange }
  } = useFormCatalogState(initValues);

  return (
    <Form
      initialValues={{ ...initValues, categoryId: initValues?.categoryId._id }}
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinishForm}
      onValuesChange={onValuesChange}
      className="form"
    >
      <Form.Item
        label="Nombre"
        name="device"
        rules={[{ required: true, message: 'Nombre es requerido' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Categoría"
        name="categoryId"
        rules={[{ required: true, message: 'Categoría es requerida' }]}
      >
        <Select showSearch>
          {categories.map((item) => (
            <Select.Option key={item._id} value={item._id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Marca"
        name="brand"
        rules={[{ required: true, message: 'Marca es requerido' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Modelo"
        name="referenceModel"
        rules={[{ required: true, message: 'Modelo es requerido' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tipo"
        name="type"
        rules={[{ required: true, message: 'Tipo es requerido' }]}
      >
        <Select showSearch onSearch={() => {}}>
          <Select.Option value="controlled">controlado</Select.Option>
          <Select.Option value="notControlled">No controlado</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Unidad de medida"
        name="unitOfMeasurement"
        rules={[{ required: true, message: 'Unidad de medida es requerido' }]}
      >
        <Select showSearch>
          <Select.Option value="metros">metros</Select.Option>
          <Select.Option value="unidades">unidades</Select.Option>
        </Select>
      </Form.Item>
      {isControlled && (
        <Form.Item
          label="Tipo de lugar"
          name="typePlace"
          rules={[{ required: true, message: 'Tipo de lugar es requerida' }]}
        >
          <Select showSearch>
            <Select.Option value="ATM">ATM</Select.Option>
            <Select.Option value="sucursal">Sucursal</Select.Option>
          </Select>
        </Form.Item>
      )}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="button-submit">
          {!initValues ? 'GUARDAR' : 'Editar'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormCatalog;
