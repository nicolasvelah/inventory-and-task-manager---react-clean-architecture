/* eslint-disable indent */
import { message } from 'antd';
import moment from 'moment';
import { repository } from '../../../../dependecy-injection';
import Task from '../../../../domain/models/task';
import { LIMIT_ROWS } from '../../../../helpers/constants/columns-table-tasks';
import { FORMAT_DATE_DAY_MONTH_YEAR_TWO } from '../../../../helpers/constants/format-date';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { useTaskListContext } from '../../../context/task/TaskListContext';
import { UseTasks } from './useTasks.interface';

const useTasks: UseTasks = () => {
  // eslint-disable-next-line object-curly-newline
  const {
    setTasks,
    setFiltersList,
    filters,
    taskSelected,
    visibleDrawer,
    onCloseDrawer
  } = useTaskListContext();

  const { tasksRepository } = repository;

  const setTaskList = (newTasks: Task[]) => {
    setTasks(newTasks);
  };

  const handleChangeFilters = (filtersValue: FiltersValue) => {
    const from = filtersValue.rangeDates?.from
      ? moment(filtersValue.rangeDates.from, FORMAT_DATE_DAY_MONTH_YEAR_TWO)
          .valueOf()
          .toString()
      : new Date().getTime().toString();

    const to = filtersValue.rangeDates?.to
      ? moment(filtersValue.rangeDates.to, FORMAT_DATE_DAY_MONTH_YEAR_TWO)
          .valueOf()
          .toString()
      : new Date().getTime().toString();

    const hide = message.loading('Obteniendo tareas ...');
    tasksRepository
      ?.getTasks({
        from,
        to,
        limit: LIMIT_ROWS,
        page: 1,
        taskId:
          filtersValue.text && filtersValue.text !== ''
            ? filtersValue.text
            : undefined
      })
      .then((values) => {
        setTaskList(values.tasks.task ?? []);
        setFiltersList({
          limit: values.tasks.itemsPerPage,
          pages: values.tasks.pages,
          valuesSearch: filtersValue,
          total: values.tasks.total,
          currentPage: filters.currentPage
        });
      })
      .finally(() => {
        hide();
      });
  };

  return {
    visibleDrawer,
    taskSelected,
    actions: {
      handleChangeFilters,
      onCloseDrawer
    }
  };
};

export default useTasks;
