/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { repository } from '../../../../../../dependecy-injection';
import { usePlacesContext } from '../../../../../context/place/PlacesContext';

import { UseFormPlaceState, ValuesFormPlace } from './useFormPlaceState.interfaces';

const useFormPlaceState: UseFormPlaceState = () => {
  const { placesRepository } = repository;
  const { places, setPlaces } = usePlacesContext();

  const onFinishForm = async (values: ValuesFormPlace, lat: number, lng: number) => {
    const hide = message.loading('Creando Sitio ...');
    const {
      name, typePlace, municipality, mainStreet, colony, city, addressNumber
    } = values;
    try {
      const payloadCreatePlace = {
        name,
        addressNumber,
        city,
        colony,
        coords: [lat, lng],
        mainStreet,
        municipality,
        state: 'active',
        type: typePlace
      };
      console.log({ payloadCreatePlace });

      const newPlace = await placesRepository?.createPlace(payloadCreatePlace);
      if (newPlace) {
        console.log({ places });
        setPlaces([newPlace, ...places]);
        console.log({ places });
      }

      message.success('Sitio creada');
    } catch (error) {
      message.error('Error al crear la Sitio');
    } finally {
      hide();
    }
  };

  return {
    onFinishForm
  };
};

export default useFormPlaceState;
