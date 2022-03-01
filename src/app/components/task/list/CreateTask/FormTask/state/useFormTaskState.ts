/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import Place from '../../../../../../../domain/models/place';
import User from '../../../../../../../domain/models/user';
import {
  UseFormTaskState,
  ValuesFormTask
} from './useFormTaskState.interfaces';

/// TODO: delete examples
const examplePlaces: Place[] = [
  {
    _id: '123',
    name: 'Sitio 1 de prueba',
    addressNumber: 'B20',
    city: 'Quito',
    colony: 'Cumbaya',
    coords: {
      type: 'Point',
      coordinates: [-87.653274, 41.936172]
    },
    mainStreet: 'Angel Rojas',
    municipality: 'Tumbaco',
    state: 'active',
    type: 'ATM'
  },
  {
    _id: '1234',
    name: 'Otro sitio',
    addressNumber: 'B20',
    city: 'Quito',
    colony: 'Cumbaya',
    coords: {
      type: 'Point',
      coordinates: [-87.653274, 41.936172]
    },
    mainStreet: 'Angel Rojas',
    municipality: 'Tumbaco',
    state: 'active',
    type: 'ATM'
  }
];

const exampleUsers: User[] = [
  {
    _id: '621402c78ecd679b686ad222',
    name: 'Nicolas',
    lastName: 'Vela',
    dateOfBirth: '2022-02-21T21:21:16.417Z',
    phone: '0996011073',
    email: 'nicolasvelah@gmail.com',
    role: 'technical',
    permissions: [],
    enabled: true
  },
  {
    _id: '621402c78ecd679b686ad2223',
    name: 'Otro',
    lastName: 'Tecnico',
    dateOfBirth: '2022-02-21T21:21:16.417Z',
    phone: '0996011073',
    email: 'nicolasvelah@gmail.com',
    role: 'technical',
    permissions: [],
    enabled: true
  }
];

const exampleCoordinatorUsers: User[] = [
  {
    _id: '621402c78ecd679b686ad222',
    name: 'Nicolas',
    lastName: 'Vela',
    dateOfBirth: '2022-02-21T21:21:16.417Z',
    phone: '0996011073',
    email: 'nicolasvelah@gmail.com',
    role: 'coordinator',
    permissions: [],
    enabled: true
  },
  {
    _id: '621402c78ecd679b686ad2223',
    name: 'Otro',
    lastName: 'Tecnico',
    dateOfBirth: '2022-02-21T21:21:16.417Z',
    phone: '0996011073',
    email: 'nicolasvelah@gmail.com',
    role: 'coordinator',
    permissions: [],
    enabled: true
  }
];

const useFormTaskState: UseFormTaskState = () => {
  const [basePlaces, setBasePlaces] = useState<Place[]>([]);
  const [placesFiltered, setPlacesFiltered] = useState<Place[]>([]);
  const [baseTechnicals, setBaseTechnicals] = useState<User[]>([]);
  const [technicalsFiltered, setTechnicalsFiltered] = useState<User[]>([]);
  const [baseCoordinators, setBaseCoordinators] = useState<User[]>([]);
  const [coordinatorsFiltered, setCoordinatorsFiltered] = useState<User[]>([]);

  useEffect(() => {
    setBasePlaces(examplePlaces);
    setPlacesFiltered(examplePlaces);

    setBaseTechnicals(exampleUsers);
    setTechnicalsFiltered(exampleUsers);

    setBaseCoordinators(exampleCoordinatorUsers);
    setCoordinatorsFiltered(exampleCoordinatorUsers);
  }, []);

  const onFinishForm = async (values: ValuesFormTask) => {
    const hide = message.loading('Cargando ...');
    try {
      console.log(values);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
          // reject();
        }, 3000);
      });
      message.success('Tarea creada');
    } catch (error) {
      message.error('Error al crear la tarea');
    } finally {
      hide();
    }
  };

  const onSearchPlaces = (value: string) => {
    setPlacesFiltered(basePlaces.filter((item) => item.name.includes(value)));
  };

  const onSearchTechnicals = (value: string) => {
    setTechnicalsFiltered(
      baseTechnicals.filter((item) => item.name.includes(value))
    );
  };

  const onSearchCoordinators = (value: string) => {
    setCoordinatorsFiltered(
      baseCoordinators.filter((item) => item.name.includes(value))
    );
  };

  return {
    placesFiltered,
    technicalsFiltered,
    coordinatorsFiltered,
    actions: {
      onFinishForm,
      onSearchPlaces,
      onSearchTechnicals,
      onSearchCoordinators
    }
  };
};

export default useFormTaskState;
