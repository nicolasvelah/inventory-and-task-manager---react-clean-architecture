/* eslint-disable indent */
import { message } from 'antd';
import { repository } from '../../../../dependecy-injection';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { usePlacesContext } from '../../../context/place/PlacesContext';
import Place from '../../../../domain/models/place';
import { UsePlaces } from './usePlace.interface';

const usePlaces: UsePlaces = () => {
  const { setPlaces } = usePlacesContext();
  const { placesRepository } = repository;

  const setPlacesList = (newPlace: Place[]) => {
    setPlaces(newPlace);
  };

  const handleChangeFilters = (filtersValue: FiltersValue) => {
    // TODO: Implement search for text
    console.log(filtersValue.text);

    const hide = message.loading('Obteniendo Sitios...');
    placesRepository
      ?.getPlaces()
      .then((values) => {
        setPlacesList(values ?? []);
      })
      .finally(() => {
        hide();
      });
  };

  return {
    actions: {
      handleChangeFilters
    }
  };
};

export default usePlaces;
