/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../../dependecy-injection';
import Place from '../../../../../../../domain/models/place';
import Task from '../../../../../../../domain/models/task';
import User from '../../../../../../../domain/models/user';
import { userGlobalContext } from '../../../../../../context/global/UserGlobalContext';
import { useTaskListContext } from '../../../../../../context/task/TaskListContext';
import { CatalogItem } from '../../../../../generic/catalog/AddCatalog/AddCatalog.interfaces';
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
  const [disabledAddCategoryButton, setDisabledAddCategoryButton] =
    useState<boolean>(true);
  const [catalogSelected, setCatalogSelected] = useState<CatalogItem[]>([]);

  const { user } = userGlobalContext();
  const { tasks, setTasks } = useTaskListContext();

  const { placesRepository, usersRepository, tasksRepository } = repository;

  const getPlaces = async () => {
    try {
      const places = await placesRepository?.getPlaces();
      if (places) {
        setBasePlaces(places);
        setPlacesFiltered(places);
      }
    } catch (error) {
      message.error('No se pudo obtener los lugares');
    }
  };

  const getTechnocalsAndCoordinators = async () => {
    try {
      const technicalsAndCoordinators =
        await usersRepository?.getCoordinatorsAndTechnicals();
      console.log('technicalsAndCoordinators -->', technicalsAndCoordinators);

      if (technicalsAndCoordinators) {
        const technicals = technicalsAndCoordinators.filter(
          (itemTechnical) => itemTechnical.role === 'technical'
        );

        setBaseTechnicals(technicals);
        setTechnicalsFiltered(technicals);

        let coordinators = technicalsAndCoordinators.filter(
          (itemTechnical) => itemTechnical.role === 'coordinator'
        );
        if (user?.role === 'coordinator') {
          coordinators = [user];
        }

        setBaseCoordinators(coordinators);
        setCoordinatorsFiltered(coordinators);
      }
    } catch (error) {
      message.error('No se pudo obtener los técnicos y coordinadores');
    }
  };

  const handleCatalogSelected = (calatogs: CatalogItem[]) => {
    setCatalogSelected(calatogs);
  };

  useEffect(() => {
    (async () => {
      const hide = message.loading('Obteniendo datos ...');
      await getPlaces();
      await getTechnocalsAndCoordinators();
      hide();
    })();
  }, []);

  const onFinishForm = async (values: ValuesFormTask) => {
    const hide = message.loading('Creando tarea ...');
    try {
      console.log('values -->', values);

      const payloadCreateTask = {
        idTechnical: values.idTechnical,
        idCoordinator: values.idCoordinator,
        idPlace: values.idPlace,
        scheduledDate: values.scheduledDate.format(),
        type: values.type,
        description: values.description,
        catalogToInstall: catalogSelected.map((itemCatalog) => itemCatalog._id)
      };

      console.log('payloadCreateTask -->', payloadCreateTask);

      const task = await tasksRepository?.createTask(payloadCreateTask);
      if (task) {
        setTasks([task, ...tasks]);
      }

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

  const onValuesChange = (value: { [k: string]: any }) => {
    if (value.idTechnical) {
      setDisabledAddCategoryButton(false);
    }
  };

  return {
    placesFiltered,
    technicalsFiltered,
    coordinatorsFiltered,
    disabledAddCategoryButton,
    actions: {
      handleCatalogSelected,
      onFinishForm,
      onSearchPlaces,
      onSearchTechnicals,
      onSearchCoordinators,
      onValuesChange
    }
  };
};

export default useFormTaskState;
