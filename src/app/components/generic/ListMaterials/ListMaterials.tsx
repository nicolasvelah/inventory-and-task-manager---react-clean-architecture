import { Button, List, Space } from 'antd';
import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import DescriptionCard from './DescriptionCard/DescriptionCard';
import { ListMaterialsProps } from './ListMaterials.interfaces';
import useListMaterialsState from './state/useListMaterialsState';
import { Material } from '../../material/AddMaterials/AddMaterial.interfaces';
import './list-material.scss';

const ListMaterials: React.FC<ListMaterialsProps> = ({
  materials,
  handleItemClick
}) => {
  const {
    currentMaterials,
    actions: { handleMaterialClick }
  } = useListMaterialsState(materials);

  const renderButtonLink = (item: Material) => {
    return !item.selected ? (
      <Button
        type="primary"
        onClick={() => handleMaterialClick(item, handleItemClick)}
      >
        Vincular tarea
      </Button>
    ) : (
      <Button
        type="primary"
        danger
        onClick={() => handleMaterialClick(item, handleItemClick)}
      >
        Desvincular
      </Button>
    );
  };

  return (
    <List
      className="list-material"
      itemLayout="horizontal"
      dataSource={currentMaterials}
      renderItem={(item) => (
        <List.Item actions={[renderButtonLink(item)]}>
          <Space>
            {item.selected ? (
              <CheckOutlined
                style={{ color: '#64FF33', fontSize: '25px', marginRight: 5 }}
              />
            ) : (
              <div style={{ width: 25, marginRight: 5 }} />
            )}
            <DescriptionCard item={item} />
          </Space>
        </List.Item>
      )}
    />
  );
};

export default ListMaterials;
