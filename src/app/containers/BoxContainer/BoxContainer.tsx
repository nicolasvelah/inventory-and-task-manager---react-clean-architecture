import React from 'react';
import { Space } from 'antd';
import HeaderList from '../../components/generic/header-list/HeaderList';
import TableBox from '../../components/inventory/TableBox/TableBox';
import useBoxContainer from './state/useBoxContainer';
import FragmentBoxesModal from '../../components/box/FragmentBoxesModal/FragmentBoxesModal';
import CreateBox from '../../components/box/CreateBox/CreateBox';
import ExportCsv from '../../components/box/ExportCsv/ExportCsv';

const BoxContainer: React.FC = () => {
  const {
    viewFragmentButton,
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
            {viewFragmentButton && <FragmentBoxesModal />}
            <ExportCsv />
            <CreateBox />
          </Space>
        </Space>
      </div>
      <TableBox />
    </div>
  );
};

export default BoxContainer;
