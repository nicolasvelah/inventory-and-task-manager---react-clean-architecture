import React from 'react';
import { KeysItemsMenuEnum } from '../../helpers/enums/menu-layout-enum';
import MenuLayout from '../layouts/MenuLayout/MenuLayout';

const DevicesPage = () => (
  <MenuLayout menuItem={KeysItemsMenuEnum.MATERIAL}>
    <div>devices</div>
  </MenuLayout>
);

export default DevicesPage;
