/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Button, Card, Form, InputNumber, Modal, Select } from 'antd';

import useFragmentBoxesModal from './state/useFragmentBoxesModal';

const FragmentBoxesModal: React.FC = () => {
  const {
    itemsSelectedModal,
    visibleModal,
    technicals,
    actions: { handleOpen, handleCancel, handleFragment, onChangeBox }
  } = useFragmentBoxesModal();

  return (
    <>
      <Button type="primary" onClick={handleOpen}>
        Fragmentar
      </Button>
      <Modal
        visible={visibleModal}
        onOk={handleOpen}
        onCancel={handleCancel}
        footer={
          <Button type="primary" onClick={handleFragment}>
            Fragmentar
          </Button>
        }
        width={800}
        destroyOnClose
      >
        <div>
          <h2>Fragmentar</h2>
          <div>
            {itemsSelectedModal.map((item) => {
              const total = item.data.attributes.totalMaterial;

              const remaining = item.totalFragment.reduce((accum, current) => {
                return accum + (Number(current.value) ?? 0);
              }, 0);

              const maxToAssign = total - remaining;

              return (
                <Card title={`${item.name} - ${item.key}`} key={item.key}>
                  <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 14 }}
                    onValuesChange={onChangeBox(item.key)}
                    className="form"
                  >
                    <Form.Item
                      label="Técnico"
                      name="technical"
                      rules={[
                        { required: true, message: 'Técnico es requerido' }
                      ]}
                    >
                      <Select showSearch onSearch={() => {}}>
                        {technicals.map((itemTechnical) => (
                          <Select.Option
                            key={itemTechnical._id}
                            value={itemTechnical._id}
                          >
                            {`${itemTechnical.name} ${itemTechnical.lastName}`}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Cantidad"
                      rules={[
                        { required: true, message: 'Cantidad es requerida' }
                      ]}
                    >
                      <Form.Item name="quantity" noStyle>
                        <InputNumber
                          min={1}
                          max={maxToAssign}
                          defaultValue={1}
                        />
                      </Form.Item>
                      <span className="ant-form-text">
                        {' '}
                        {item.data.attributes.device.unitOfMeasurement}
                      </span>
                    </Form.Item>
                  </Form>
                </Card>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FragmentBoxesModal;
