/* eslint-disable no-unused-vars */
import Inventory from '../../../../../../domain/models/inventory';
import Place from '../../../../../../domain/models/place';
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

export interface DataTaskExcel {
  key: string;
  coordinator: string;
  technical: string;
  place: string;
  scheduledDate: string;
  arrivalDate: string;
  arrivalLatLong: any;
  closedDate: string;
  closedLatLong: any;
  type: string;
  description: string;
  catalogToInstall: string;
}

export type UseExportCsv = () => {
  tasks: DataTaskExcel[];
}

export type UseTasksTable = () => {
  dataTable: DataTask[];
  filters: FiltersTaskList;
  actions: {
    onChangePage: (page: number) => void;
    onClickRow: (record: any) => {
      onClick: () => void;
    };
  };
};
