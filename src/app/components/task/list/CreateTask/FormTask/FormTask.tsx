import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Form, DatePicker, Select, Input } from 'antd';

import { FormTaskProps } from './FormTask.interfaces';
import useFormTaskState from './state/useFormTaskState';
import {
  taskType,
  TaskType,
  TASK_TYPE_LIST
} from '../../../../../../domain/models/task';
import AddCatalogslItem from './AddCatalogsItem/AddCatalogsItem';

import './form-task.scss';

const FormTask: React.FC<FormTaskProps> = ({ initValues }) => {
  const {
    placesFiltered,
    technicalsFiltered,
    coordinatorsFiltered,
    disabledAddCategoryButton,
    actions: {
      handleCatalogSelected,
      onFinishForm,
      onSearchPlaces,
      onSearchTechnicals,
      onSearchCoordinators,
      onValuesChange
    }
  } = useFormTaskState();

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
        label="Buscar lugar"
        name="idPlace"
        rules={[{ required: true, message: 'Sitio es requerido' }]}
      >
        <Select showSearch onSearch={onSearchPlaces}>
          {placesFiltered.map((item) => (
            <Select.Option key={item.name} value={item._id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Buscar coordinador"
        name="idCoordinator"
        rules={[{ required: true, message: 'Coordinador es requerido' }]}
      >
        <Select showSearch onSearch={onSearchCoordinators}>
          {coordinatorsFiltered.map((item) => (
            <Select.Option key={item.name} value={item._id}>
              {`${item.name} ${item.lastName}`}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Buscar técnico"
        name="idTechnical"
        rules={[{ required: true, message: 'Técnico es requerido' }]}
      >
        <Select showSearch onSearch={onSearchTechnicals}>
          {technicalsFiltered.map((item) => (
            <Select.Option key={item.name} value={item._id}>
              {`${item.name} ${item.lastName}`}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Tipo"
        name="type"
        rules={[{ required: true, message: 'Tipo es requerido' }]}
      >
        <Select showSearch>
          {TASK_TYPE_LIST.map((item) => (
            <Select.Option key={item} value={item}>
              {TaskType[item as taskType]}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Fecha programada"
        name="scheduledDate"
        rules={[{ required: true, message: 'Fecha programada es requerida' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="description"
        label="Descripción"
        rules={[{ required: true, message: 'Una descripción es requerida' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <AddCatalogslItem
        disabled={disabledAddCategoryButton}
        handleCatalogSelected={handleCatalogSelected}
      />

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {!initValues ? 'GUARDAR' : 'Editar'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormTask;
