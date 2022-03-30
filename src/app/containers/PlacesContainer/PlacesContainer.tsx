import React from 'react';
import HeaderList from '../../components/generic/header-list/HeaderList';
import TablePlaces from '../../components/places/TablePlaces/TablePlaces';
import CreatePlace from '../../components/places/CreatePlace/CreatePlace';
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
          <CreatePlace />
        </div>
      </div>
      <TablePlaces places={places} />
    </div>
  );
};

export default PlacesContainer;
