import { Button, List, Space } from 'antd';
import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { ListCatalogProps } from './ListCatalog.interfaces';
import useListCatalogState from './state/useListCatalogState';
import { CatalogItem } from '../catalog/AddCatalog/AddCatalog.interfaces';

const ListCatalog: React.FC<ListCatalogProps> = ({
  catalogs,
  handleItemClick
}) => {
  const {
    currentCatalogs,
    actions: { handleCatalogClick }
  } = useListCatalogState(catalogs);

  const renderIconSelected = (item: CatalogItem) => {
    return item.selected ? (
      <CheckOutlined
        style={{ color: '#64FF33', fontSize: '25px', marginRight: 5 }}
      />
    ) : (
      <div style={{ width: 25, marginRight: 5 }} />
    );
  };

  const renderButtonLink = (item: CatalogItem) => {
    return !item.selected ? (
      <Button
        type="primary"
        onClick={() => handleCatalogClick(item, handleItemClick)}
      >
        Vincular tarea
      </Button>
    ) : (
      <Button
        type="primary"
        danger
        onClick={() => handleCatalogClick(item, handleItemClick)}
      >
        Desvincular
      </Button>
    );
  };

  return (
    <List
      className="list-material"
      itemLayout="horizontal"
      dataSource={currentCatalogs}
      renderItem={(item) => (
        <List.Item actions={[renderButtonLink(item)]}>
          <Space>
            {renderIconSelected(item)}
            <div />
          </Space>
        </List.Item>
      )}
    />
  );
};

export default ListCatalog;
