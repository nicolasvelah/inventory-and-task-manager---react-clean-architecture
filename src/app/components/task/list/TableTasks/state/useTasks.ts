/* eslint-disable indent */
import { message } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../dependecy-injection';
import { LIMIT_ROWS } from '../../../../../../helpers/constants/columns-table-tasks';
import { FORMAT_DATE_DAY_MONTH_YEAR_TWO } from '../../../../../../helpers/constants/format-date';
import { getValue } from '../../../../../../utils/get-value';
import { momentFormat } from '../../../../../../utils/moment-utils';
import { useTaskListContext } from '../../../../../context/task/TaskListContext';
import { DataTask, UseTasksTable } from './useTasks.interfaces';

const useTasksTable: UseTasksTable = () => {
  const [data, setData] = useState<DataTask[]>([]);

  // eslint-disable-next-line object-curly-newline
  const { tasks, setTasks, filters, setFiltersList, setTaskSelected } =
    useTaskListContext();
  const { tasksRepository } = repository;

  useEffect(() => {
    const newData: DataTask[] = tasks.map((task) => ({
      key: task._id,
      coordinator: `${getValue(task.coordinator, 'name')} ${getValue(
        task.coordinator,
        'lastName'
      )}`,
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

  const onChangePage = (page: number) => {
    const {
      valuesSearch: { rangeDates }
    } = filters;

    const from = rangeDates?.from
      ? moment(rangeDates.from, FORMAT_DATE_DAY_MONTH_YEAR_TWO)
          .valueOf()
          .toString()
      : new Date().getTime().toString();

    const to = rangeDates?.to
      ? moment(rangeDates.to, FORMAT_DATE_DAY_MONTH_YEAR_TWO)
          .valueOf()
          .toString()
      : new Date().getTime().toString();

    const hide = message.loading('Obteniendo tareas ...');
    tasksRepository
      ?.getTasks({
        from,
        to,
        limit: LIMIT_ROWS,
        page
      })
      .then((values) => {
        setTasks(values.tasks.task ?? []);
        setFiltersList({
          limit: values.tasks.itemsPerPage,
          pages: values.tasks.pages,
          valuesSearch: filters.valuesSearch,
          total: values.tasks.total,
          currentPage: page
        });
      })
      .finally(() => {
        hide();
      });
  };

  const onClickRow = (record: any) => {
    return {
      onClick: () => {
        const activateTask = tasks.find((item) => item._id === record.key);
        setTaskSelected(activateTask ?? null);
      }
    };
  };

  return {
    dataTable: data,
    filters,
    actions: {
      onChangePage,
      onClickRow
    }
  };
};

export default useTasksTable;
