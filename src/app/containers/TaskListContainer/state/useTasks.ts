import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../dependecy-injection';
import Task from '../../../../domain/models/task';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { UseTasks } from './useTasks.interface';

const useTasks: UseTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { tasksRepository } = repository;

  useEffect(() => {
    const hide = message.loading('Obteniendo tareas ...');
    tasksRepository
      ?.getTasks()
      .then((values) => {
        setTasks(values);
      })
      .finally(() => {
        hide();
      });
  }, []);

  const setTaskList = (newTasks: Task[]) => {
    setTasks(newTasks);
  };

  const handleChangeFilters = (filtersValue: FiltersValue) => {
    console.log('filtersValue -->', filtersValue);
    setTaskList([]);
  };

  return {
    tasks,
    actions: {
      handleChangeFilters
    }
  };
};

export default useTasks;
