/* eslint-disable object-curly-newline */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../dependecy-injection';
import Place from '../../../../../domain/models/place';
import { momentFormat } from '../../../../../utils/moment-utils';
import { usePlacesContext } from '../../../../context/place/PlacesContext';
import { DataPlacesTable } from './usePlacesTable.interface';

const usePlacesTable = () => {
  const [data, setData] = useState<DataPlacesTable[]>([]);

  const [viewModal, setViewModal] = useState<boolean>(false);
  const [valueToEdit, setValueToEdit] = useState<Place | null>(null);

  const { places, setPlaces } = usePlacesContext();

  const { placesRepository } = repository;

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
      updatedAt: place.updatedAt ? momentFormat(place.updatedAt) : '',
      data: place
    }));
    setData(newData);
  }, [places]);

  const handleEdit = (placeToEdit: Place) => {
    setValueToEdit(placeToEdit);
    setViewModal(true);
  };

  const handleDelete = (id: string) => {
    const hide = message.loading('Eliminando sitio');
    placesRepository
      ?.delete(id)
      .then((deleted) => {
        if (deleted) {
          const newPlacesList = places.filter((item) => item._id !== id);
          setPlaces(newPlacesList);

          message.success('Sitio eliminado');
        } else {
          message.error('No se pudo eliminar el sitio. Vuelve intentarlo.');
        }
      })
      .finally(() => {
        hide();
      });
  };

  const openModal = () => setViewModal(true);
  const closeModal = () => setViewModal(false);

  return {
    dataTable: data,
    viewModal,
    valueToEdit,
    actions: { handleEdit, handleDelete, openModal, closeModal }
  };
};

export default usePlacesTable;
