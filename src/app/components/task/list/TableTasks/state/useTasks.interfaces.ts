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
  data: Task;
}

export type UseTasksTable = () => {
  viewModal: boolean;
  valueToEdit: Task | null;
  dataTable: DataTask[];
  filters: FiltersTaskList;
  actions: {
    onChangePage: (page: number) => void;
    onClickRow: (record: any) => {
      onClick: () => void;
    };
    handleEdit: (categoryToEdit: Task) => void;
    handleDelete: (id: string) => void;
    openModal: () => void;
    closeModal: () => void;
  };
};
