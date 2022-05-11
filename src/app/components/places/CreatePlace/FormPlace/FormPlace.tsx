import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Form, Input, Select } from 'antd';
import { FormPlaceProps } from './FormPlace.interfaces';
import FormPlaceMap from './FormPlaceMap/FormPlaceMap';
import useFormPlaceState from './state/useFormPlaceState';

const FormPlace: React.FC<FormPlaceProps> = ({ initValues }) => {
  const {
    lat,
    lng,
    actions: { setLatitude, setLongitude, onFinishForm }
  } = useFormPlaceState(initValues);

  let initValuesConverted;
  let defaultPoint;

  if (initValues) {
    const latitude = initValues.coords.coordinates[0];
    const longitude = initValues.coords.coordinates[1];

    initValuesConverted = {
      ...initValues,
      typePlace: initValues.type,
      lat: latitude,
      lng: longitude
    };

    defaultPoint = {
      lat: latitude,
      lng: longitude
    };
  }

  return (
    <Form
      initialValues={initValuesConverted}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      onFinish={(values: any) => onFinishForm(values, lat, lng)}
      onValuesChange={() => {}}
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
        label="Calle principal"
        name="mainStreet"
        rules={[{ required: true, message: 'Calle principal es requerido' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Número de la dirección"
        name="addressNumber"
        rules={[
          { required: true, message: 'Número de la dirección es requerido' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Colonia"
        name="colony"
        rules={[{ required: true, message: 'Colonia es requerido' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ciudad"
        name="city"
        rules={[{ required: true, message: 'Ciudad es requerido' }]}
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
      <Form.Item
        label="Tipo de lugar"
        name="typePlace"
        rules={[{ required: true, message: 'Tipo de lugar es requerido' }]}
      >
        <Select showSearch>
          <Select.Option key="ATM" value="ATM">
            ATM
          </Select.Option>
          <Select.Option key="sucursal" value="sucursal">
            Sucursal
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Ubicación">
        <FormPlaceMap
          setLatParent={setLatitude}
          setLngParent={setLongitude}
          defaultPoint={defaultPoint}
        />
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
