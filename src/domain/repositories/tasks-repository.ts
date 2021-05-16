/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import Task from '../models/task';

export default interface TasksRepository {
  getTasks(): Promise<Task[]>;
}
