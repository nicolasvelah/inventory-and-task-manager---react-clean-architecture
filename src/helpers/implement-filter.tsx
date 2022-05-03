/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { ColumnTable } from '../domain/interfaces/columns-table';

const FilterSearch: React.FC<{
  props: {
    clearFilters: () => void;
    confirm: () => void;
    filters: undefined;
    prefixCls: 'ant-dropdown-custom';
    selectedKeys: any[];
    setSelectedKeys: (selectedKeys: any[]) => void;
    visible: boolean;
  };
}> = ({ props: { confirm, selectedKeys, setSelectedKeys, clearFilters } }) => (
  <div style={{ padding: 8 }}>
    <Input
      value={selectedKeys[0]}
      onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
      style={{ marginBottom: 8, display: 'block' }}
    />
    <Space>
      <Button
        type="primary"
        onClick={() => confirm()}
        icon={<SearchOutlined />}
        size="small"
        style={{ width: 90 }}
      >
        Buscar
      </Button>
      <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
        Resetear
      </Button>
    </Space>
  </div>
);

/* eslint-disable import/prefer-default-export */
export const implementSearchFilter = (column: any): ColumnTable => {
  try {
    return {
      ...column,
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      filterDropdown: (value: any) => {
        return <FilterSearch props={value} />;
      },
      onFilter: (value: string, record: any) => {
        return (record[column.key] ?? '')
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      }
    };
  } catch (error) {
    return column;
  }
};
