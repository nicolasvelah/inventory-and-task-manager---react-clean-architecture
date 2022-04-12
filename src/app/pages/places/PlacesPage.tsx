import React from 'react';
import MenuLayout from '../../layouts/MenuLayout/MenuLayout';
import PlacesContainer from '../../containers/PlacesContainer/PlacesContainer';

import './places-page.scss';
import { KeysItemsMenuEnum } from '../../../helpers/enums/menu-layout-enum';

const PlacesPage: React.FC = () => (
  <MenuLayout menuItem={KeysItemsMenuEnum.PLACES}>
    <div className="places-page">
      Sitios
      <PlacesContainer />
    </div>
  </MenuLayout>
);

export default PlacesPage;
