import { useEffect, useState } from 'react';
import Task from '../../../../../../domain/models/task';
import { momentFormat } from '../../../../../../utils/moment-utils';
import { DataTask, UseTasksTable } from './useTasks.interfaces';

const useTasksTable: UseTasksTable = (tasks: Task[]) => {
  const [data, setData] = useState<DataTask[]>([]);

  useEffect(() => {
    const newData: DataTask[] = tasks.map((task) => ({
      key: task._id,
      coordinator: `${task.technical.coordinator?.name} ${task.technical.coordinator?.lastName}`,
      technical: `${task.technical.name} ${task.technical.lastName}`,
      address: `${task.place.city} ${task.place.addressNumber}`,
      scheduledDate: task.scheduledDate ? momentFormat(task.scheduledDate) : '',
      arrivalDate: task.arrivalDate ? momentFormat(task.arrivalDate) : '',
      closedDate: task.closedDate ? momentFormat(task.closedDate) : ''
    }));
    setData(newData);
  }, [tasks]);

  return {
    dataTable: data
  };
};

export default useTasksTable;
