import React from 'react';
import { Divider, Drawer } from 'antd';

import { DetailTaskBox } from './DrawerDetailBox.interfaces';
import useDrawerDetailBox from './useDrawerDetailBox/useDrawerDetailBox';
import FragmentBoxesModal from '../../box/FragmentBoxesModal/FragmentBoxesModal';

const DrawerDetailBox: React.FC<DetailTaskBox> = ({
  activeBox,
  onCloseDrawer,
  visibleDrawer
}) => {
  const { canItBeFragmented } = useDrawerDetailBox(activeBox);

  return (
    <Drawer
      title={`Caja - ${activeBox?.key}`}
      width={520}
      closable={false}
      onClose={onCloseDrawer}
      visible={visibleDrawer}
    >
      <div>
        <div>
          Fragmentar
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

        {JSON.stringify(activeBox)}
      </div>
    </Drawer>
  );
};

export default DrawerDetailBox;
