import React from 'react';
import MenuLayout from '../../layouts/MenuLayout/MenuLayout';
import PlacesContainer from '../../containers/PlacesContainer/PlacesContainer';
import { PlacesContextProvider } from '../../context/place/PlacesContext';

import './places-page.scss';
import { KeysItemsMenuEnum } from '../../../helpers/enums/menu-layout-enum';

const PlacesPage: React.FC = () => (
  <MenuLayout menuItem={KeysItemsMenuEnum.PLACES}>
    <PlacesContextProvider>
      <div className="places-page">
        Sitios
        <PlacesContainer />
      </div>
    </PlacesContextProvider>
  </MenuLayout>
);

export default PlacesPage;
