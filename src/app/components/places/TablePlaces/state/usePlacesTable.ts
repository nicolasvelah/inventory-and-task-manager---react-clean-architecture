import { useEffect, useState } from 'react';
import { momentFormat } from '../../../../../utils/moment-utils';
import { usePlacesContext } from '../../../../context/place/PlacesContext';
import {
  DataPlacesTable,
  UsePlacesTable
} from './usePlacesTable.interface';

const usePlacesTable: UsePlacesTable = () => {
  const [data, setData] = useState<DataPlacesTable[]>([]);

  const { places } = usePlacesContext();

  useEffect(() => {
    const newData: DataPlacesTable[] = places.map((place) => ({
      key: place._id,
      name: place.name,
      coords: place.coords,
      mainStreet: place.mainStreet,
      addressNumber: place.addressNumber,
      colony: place.colony,
      municipality: place.municipality,
      city: place.city,
      state: place.state,
      type: place.type,
      IntalledMaterial: place.IntalledMaterial,
      createdAt: place.createdAt ? momentFormat(place.createdAt) : '',
      updatedAt: place.updatedAt ? momentFormat(place.updatedAt) : ''
    }));
    setData(newData);
  }, [places]);

  return {
    dataTable: data,
  };
};

export default usePlacesTable;
