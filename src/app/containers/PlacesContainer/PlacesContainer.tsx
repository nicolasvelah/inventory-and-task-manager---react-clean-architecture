import { Button } from 'antd';
import React from 'react';
import HeaderList from '../../components/generic/header-list/HeaderList';
import TablePlaces from '../../components/places/TablePlaces/TablePlaces';
import usePlaces from './state/usePlaces';

const PlacesContainer: React.FC = () => {
  const { places } = usePlaces();
  return (
    <div>
      <div className="header">
        <div className="header-first-block">
          <HeaderList handleChangeFilters={() => {}} showRangePicker={false} />
        </div>
        <div>
          <Button>Crear</Button>
        </div>
      </div>
      <TablePlaces places={places} />
    </div>
  );
};

export default PlacesContainer;
