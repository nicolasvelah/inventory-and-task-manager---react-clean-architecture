/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import Task from '../models/task';

export default interface TasksRepository {
  getTasks(): Promise<Task[]>;
  getAllByIdUser(userId: string): Promise<Task[]>;
  getAllByIdUserAndRangeDates(userId: string, startDate: string, endDate: string): Promise<Task[]>;
}
