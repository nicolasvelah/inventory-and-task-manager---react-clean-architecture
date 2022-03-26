/* eslint-disable no-unused-vars */
import Task from '../../../../../../domain/models/task';
import { FiltersTaskList } from '../../../../../context/task/TaskListContext';

export interface DataTask {
  key: string;
  coordinator: string;
  technical: string;
  address: string;
  scheduledDate: string;
  arrivalDate: string;
  closedDate: string;
}

export type UseTasksTable = () => {
  dataTable: DataTask[];
  filters: FiltersTaskList;
  actions: {
    onChangePage: (page: number) => void;
  };
};
