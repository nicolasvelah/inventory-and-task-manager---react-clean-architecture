import React from 'react';
import { Space } from 'antd';
import HeaderList from '../../components/generic/header-list/HeaderList';
import TableBox from '../../components/inventory/TableBox/TableBox';
import useBoxContainer from './state/useBoxContainer';
import FragmentBoxesModal from '../../components/box/FragmentBoxesModal/FragmentBoxesModal';
import DrawerDetailBox from '../../components/generic/drawer-detail-box/DrawerDetailBox';
import CreateBox from '../../components/box/CreateBox/CreateBox';
import ExportCsv from '../../components/box/ExportCsv/ExportCsv';

const BoxContainer: React.FC = () => {
  const {
    itemsSelectedModal,
    viewFragmentButton,
    itemSelected,
    viewDrawer,
    actions: { handleChangeFilters, onCloseDrawer, onSubmitFragment }
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
            {viewFragmentButton && (
              <FragmentBoxesModal
                itemsToFragment={itemsSelectedModal}
                onSubmitFragment={onSubmitFragment}
              />
            )}
            <ExportCsv />
            <CreateBox />
          </Space>
        </Space>
      </div>
      <TableBox />
      <DrawerDetailBox
        activeBox={itemSelected}
        onCloseDrawer={onCloseDrawer}
        visibleDrawer={viewDrawer}
      />
    </div>
  );
};

export default BoxContainer;
