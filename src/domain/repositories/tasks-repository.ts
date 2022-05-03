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

export interface PayloadCreateTask {
  idTechnical: string;
  idCoordinator: string;
  idPlace: string;
  scheduledDate: string;
  type: string;
  description: string;
  catalogToInstall: {
    id: string;
    quantity: number;
  }[];
}

export default interface TasksRepository {
  createTask(payload: PayloadCreateTask): Promise<Task>;

  getTasks(values: {
    from: string;
    to: string;
    page: number;
    limit: number;
    taskId?: string;
  }): Promise<TaskResponse>;
  getAllByIdUser(userId: string): Promise<Task[]>;
  getAllByIdUserAndRangeDates(
    userId: string,
    startDate: string,
    endDate: string
  ): Promise<Task[]>;
  delete(id: string): Promise<boolean>;
  update(id: string, data: Partial<Task>): Promise<Task>;
}
