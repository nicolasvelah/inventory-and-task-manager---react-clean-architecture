import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../dependecy-injection';
import Place from '../../../../domain/models/place';

const usePlaces = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const { placesRepository } = repository;

  useEffect(() => {
    const hide = message.loading('Obteniendo sitios ...');
    placesRepository
      ?.getPlaces()
      .then((values) => {
        setPlaces(values);
      })
      .catch(() => {
        message.error('Algo ocurrió. Vuelve a intentarlo.');
      })
      .finally(() => {
        hide();
      });
  }, []);

  return {
    places
  };
};

export default usePlaces;
