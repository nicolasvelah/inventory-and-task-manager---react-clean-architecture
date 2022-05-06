/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../../dependecy-injection';
import Place from '../../../../../../../domain/models/place';
import { taskType } from '../../../../../../../domain/models/task';
import User from '../../../../../../../domain/models/user';
import { userGlobalContext } from '../../../../../../context/global/UserGlobalContext';
import { useTaskListContext } from '../../../../../../context/task/TaskListContext';
import { CatalogItem } from '../../../../../generic/catalog/AddCatalog/AddCatalog.interfaces';
import {
  UseFormTaskState,
  ValuesFormTask
} from './useFormTaskState.interfaces';

const useFormTaskState: UseFormTaskState = (initValues) => {
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

        if (initValues?.technical) {
          setDisabledAddCategoryButton(false);
        }
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
    const payloadCreateTask = {
      idTechnical: values.idTechnical,
      idCoordinator: values.idCoordinator,
      idPlace: values.idPlace,
      scheduledDate: values.scheduledDate.format(),
      type: values.type as taskType,
      description: values.description,
      catalogToInstall: catalogSelected.map((itemCatalog) => ({
        id: itemCatalog._id,
        quantity: itemCatalog.numberOfItems
          ? Number(itemCatalog.numberOfItems)
          : 0
      }))
    };

    if (initValues) {
      const hideUpdated = message.loading('Actualizando la tarea ...');

      tasksRepository
        ?.update(initValues._id, payloadCreateTask)
        .then((taskUpdated) => {
          const newTasks = tasks.map((item) => {
            if (item._id === taskUpdated._id) {
              return taskUpdated;
            }
            return item;
          });
          setTasks(newTasks);
          message.success('Tarea actualizado.');
        })
        .finally(() => {
          hideUpdated();
        })
        .catch(() => {
          message.error('No se pudo actualizar la tarea.');
        });

      return;
    }

    const hide = message.loading('Creando tarea ...');
    await tasksRepository
      ?.createTask(payloadCreateTask)
      .then((newTask) => {
        setTasks([newTask, ...tasks]);
        message.success('Tarea creada');
      })
      .finally(() => {
        hide();
      })
      .catch(() => {
        message.error('Error al crear la tarea');
      });
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
