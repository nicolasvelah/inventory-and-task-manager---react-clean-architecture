import { useEffect, useState } from 'react';
import Task from '../../../../../../domain/models/task';
import { getValue } from '../../../../../../utils/get-value';
import { momentFormat } from '../../../../../../utils/moment-utils';
import { DataTask, UseTasksTable } from './useTasks.interfaces';

const useTasksTable: UseTasksTable = (tasks: Task[]) => {
  const [data, setData] = useState<DataTask[]>([]);

  useEffect(() => {
    const newData: DataTask[] = tasks.map((task) => ({
      key: task._id,
      coordinator: `${getValue(task.technical, 'coordinator')?.name} ${
        getValue(task.technical, 'coordinator')?.lastName
      }`,
      technical: `${getValue(task.technical, 'name')} ${getValue(
        task.technical,
        'lastName'
      )}`,
      address: `${getValue(task.place, 'city')} ${getValue(
        task.place,
        'addressNumber'
      )}`,
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
