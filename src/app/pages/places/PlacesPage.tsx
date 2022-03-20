import React from 'react';
import MenuLayout from '../../layouts/MenuLayout/MenuLayout';
import PlacesContainer from '../../containers/PlacesContainer/PlacesContainer';

import './places-page.scss';

const PlacesPage: React.FC = () => (
  <MenuLayout menuItem="Sitios">
    <div className="places-page">
      Sitios
      <PlacesContainer />
    </div>
  </MenuLayout>
);

export default PlacesPage;
