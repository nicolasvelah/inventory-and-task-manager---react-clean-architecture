/* eslint-disable object-curly-newline */
import React from 'react';
import { Divider, Drawer, List, Table } from 'antd';

import { DetailTaskBox } from './DrawerDetailBox.interfaces';
import useDrawerDetailBox from './useDrawerDetailBox/useDrawerDetailBox';
import FragmentBoxesModal from '../../box/FragmentBoxesModal/FragmentBoxesModal';
import './drawer-detail-box.scss';
import { COLUMNS_TABLE_FRAGMENTS } from '../../../../helpers/constants/columns-table-tasks';

const DrawerDetailBox: React.FC<DetailTaskBox> = ({
  activeBox,
  onCloseDrawer,
  visibleDrawer
}) => {
  const { canItBeFragmented, dataSource } = useDrawerDetailBox(activeBox);

  return (
    <Drawer
      title={`Caja - ${activeBox?.key}`}
      width={520}
      closable={false}
      onClose={onCloseDrawer}
      visible={visibleDrawer}
    >
      <div className="drawer-detail-box">
        <div className="fragment-header">
          <b>Fragmentos</b>
          {canItBeFragmented && activeBox && (
            <FragmentBoxesModal
              itemsToFragment={[activeBox]}
              onSubmitFragment={() => {
                onCloseDrawer();
              }}
            />
          )}
        </div>
        <Divider />

        {activeBox && (
          <Table
            columns={COLUMNS_TABLE_FRAGMENTS}
            dataSource={[activeBox]}
            bordered
            pagination={false}
          />
        )}

        <Divider />
        <b>Inventario</b>
        {dataSource.length > 0 ? (
          <List
            bordered
            dataSource={dataSource}
            renderItem={(item) => (
              <List.Item>
                <span>{item}</span>
              </List.Item>
            )}
          />
        ) : (
          <div>
            <span>No se ha usado el fragmento</span>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default DrawerDetailBox;
