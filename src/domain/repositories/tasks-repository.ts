/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import Task from '../models/task';

export interface TaskResponse {
  tasks: {
    total: number;
    task: Task[] | null;
    itemsPerPage: number;
    pages: number;
  };
}

export default interface TasksRepository {
  getTasks(values: {
    from: string;
    to: string;
    page: number;
    limit: number;
  }): Promise<TaskResponse>;
  getAllByIdUser(userId: string): Promise<Task[]>;
  getAllByIdUserAndRangeDates(
    userId: string,
    startDate: string,
    endDate: string
  ): Promise<Task[]>;
}
