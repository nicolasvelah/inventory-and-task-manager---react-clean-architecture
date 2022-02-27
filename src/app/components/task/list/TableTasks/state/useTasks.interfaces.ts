/* eslint-disable no-unused-vars */
import Task from '../../../../../../domain/models/task';

export interface DataTask {
  key: string;
  coordinator: string;
  technical: string;
  address: string;
  scheduledDate: string;
  arrivalDate: string;
  closedDate: string;
}

export type UseTasksTable = (tasks: Task[]) => {
  dataTable: DataTask[];
};
