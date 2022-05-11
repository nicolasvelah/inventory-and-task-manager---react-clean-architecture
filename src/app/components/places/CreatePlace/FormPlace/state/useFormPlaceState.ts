/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../dependecy-injection';
import Place, {
  PayloadCreatePlace
} from '../../../../../../domain/models/place';
import { usePlacesContext } from '../../../../../context/place/PlacesContext';

import {
  UseFormPlaceState,
  ValuesFormPlace
} from './useFormPlaceState.interfaces';

const useFormPlaceState = (initValues?: Place) => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const { placesRepository } = repository;
  const { places, setPlaces } = usePlacesContext();

  const onFinishForm = async (
    values: ValuesFormPlace,
    latitude: number,
    longitude: number
  ) => {
    const {
      name,
      typePlace,
      municipality,
      mainStreet,
      colony,
      city,
      addressNumber
    } = values;

    const payload: any = {
      name,
      addressNumber,
      city,
      colony,
      coords: [latitude, longitude],
      mainStreet,
      municipality,
      state: 'active',
      type: typePlace
    };

    if (initValues) {
      payload.coords = {
        type: 'Point',
        coordinates: [latitude, longitude]
      };
      const hideUpdated = message.loading('Actualizando Sitio ...');

      placesRepository
        ?.update(initValues._id, payload as Partial<Place>)
        .then((updated) => {
          const newPlaces = places.map((item) => {
            if (item._id === updated._id) {
              return updated;
            }

            return item;
          });

          setPlaces(newPlaces);

          message.success('Sitio actualizado');
        })
        .catch(() => {
          message.error('No se pudo actualizar el sitio. Vuelva a intentarlo.');
        })
        .finally(() => {
          hideUpdated();
        });

      return;
    }

    const hide = message.loading('Creando Sitio ...');

    try {
      const newPlace = await placesRepository?.createPlace(payload);
      if (newPlace) {
        setPlaces([newPlace, ...places]);
      }

      message.success('Sitio creado');
    } catch (error) {
      message.error('Error al crear el Sitio');
    } finally {
      hide();
    }
  };

  const setLatitude = (latitude: number) => setLat(latitude);
  const setLongitude = (longitude: number) => setLng(longitude);

  useEffect(() => {
    if (initValues) {
      setLatitude(initValues.coords.coordinates[0]);
      setLongitude(initValues.coords.coordinates[1]);
    }
  }, []);

  return {
    lat,
    lng,
    actions: {
      setLatitude,
      setLongitude,
      onFinishForm
    }
  };
};

export default useFormPlaceState;
