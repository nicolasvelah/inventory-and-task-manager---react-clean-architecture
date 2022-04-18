import React from 'react';
import { Button, Space } from 'antd';
import HeaderList from '../../components/generic/header-list/HeaderList';
import TableBox from '../../components/inventory/TableBox/TableBox';
import useBoxContainer from './state/useBoxContainer';

const BoxContainer: React.FC = () => {
  const {
    actions: { handleChangeFilters }
  } = useBoxContainer();

  return (
    <div>
      <div className="header">
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
          <HeaderList
            handleChangeFilters={handleChangeFilters}
            showRangePicker={false}
          />

          <Space>
            <Button>Excel</Button>
            <Button>Crear</Button>
          </Space>
        </Space>
      </div>
      <TableBox />
    </div>
  );
};

export default BoxContainer;
