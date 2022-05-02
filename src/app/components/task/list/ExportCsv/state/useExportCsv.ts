/* eslint-disable indent */
import { useEffect, useState } from 'react';
import Place from '../../../../../../domain/models/place';
import Task from '../../../../../../domain/models/task';
import { getValue } from '../../../../../../utils/get-value';
import { momentFormat } from '../../../../../../utils/moment-utils';
import { useTaskListContext } from '../../../../../context/task/TaskListContext';
import { DataTaskExcel, UseExportCsv } from './useExportCsv.interface';

const useExportCsv: UseExportCsv = () => {
  const [data, setData] = useState<DataTaskExcel[]>([]);

  // eslint-disable-next-line object-curly-newline
  const { tasks } = useTaskListContext();

  useEffect(() => {
    const newData: DataTaskExcel[] = tasks.map((task:Task) => {
      const place = task.place as Place;
      const catalogToInstall = task.catalogToInstall as unknown as {id:string, quantity: number}[];
      let catalogToInstallRender = '';
      catalogToInstall.map((item) => {
        console.log({ item });
        catalogToInstallRender += `id: ${item.id} / quantity: ${item.quantity}, `;
        return item;
      });
      return {
        key: task._id,
        coordinator: `${getValue(task.coordinator, 'name')} ${getValue(
          task.coordinator,
          'lastName'
        )}`,
        technical: `${getValue(task.technical, 'name')} ${getValue(
          task.technical,
          'lastName'
        )}`,
        place: place.name,
        scheduledDate: task.scheduledDate ? momentFormat(task.scheduledDate) : '',
        arrivalDate: task.arrivalDate ? momentFormat(task.arrivalDate) : '',
        arrivalLatLong: `${task.arrivalLatLong?.coordinates[0] ?? ''}, ${task.arrivalLatLong?.coordinates[1] ?? ''}`,
        closedDate: task.closedDate ? momentFormat(task.closedDate) : '',
        closedLatLong: `${task.closedLatLong?.coordinates[0] ?? ''}, ${task.closedLatLong?.coordinates[1] ?? ''}`,
        type: task.type,
        description: task.description,
        catalogToInstall: catalogToInstallRender
      };
    });
    setData(newData);
  }, [tasks]);

  return {
    tasks: data,
  };
};

export default useExportCsv;
