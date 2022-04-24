/* eslint-disable class-methods-use-this */
/* eslint-disable semi-spacing */
import Task from '../../domain/models/task';

import TasksRepository, {
  PayloadCreateTask,
  TaskResponse
} from '../../domain/repositories/tasks-repository';
import { axiosRequest } from '../../utils/axios-util';

export default class TasksRepositoryImpl implements TasksRepository {
  async createTask(payload: PayloadCreateTask): Promise<Task> {
    const axios = await axiosRequest();
    const responseTasks = await axios.post<Task>(
      '/api/v1/tasks/create',
      payload
    );

    return responseTasks.data;
  }

  async getTasks(values: {
    from: string;
    to: string;
    page: number;
    limit: number;
  }): Promise<TaskResponse> {
    // eslint-disable-next-line object-curly-newline
    const { from, to, page, limit } = values;

    const axios = await axiosRequest();
    const responseTasks = await axios.get<TaskResponse>(
      `api/v1/tasks/?from=${from}&to=${to}&page=${page}&limit=${limit}`
    );

    return responseTasks.data;
  }

  async getAllByIdUser(userId: string): Promise<Task[]> {
    // TODO: Change method
    console.log('userId -->', userId);
    const axios = await axiosRequest();
    const responseTasks = await axios.get<{ tasks: Task[] }>(
      '/api/v1/tasks/user/free?limit=5&page=0'
    );

    return responseTasks.data.tasks;
  }

  async getAllByIdUserAndRangeDates(
    userId: string,
    startDate: string,
    endDate: string
  ): Promise<Task[]> {
    const axios = await axiosRequest();
    const responseTasks = await axios.get<{ tasks: Task[] }>(
      `ﬁ/api/v1/tasks/user/${userId}/range/${startDate}/${endDate}`
    );

    return responseTasks.data.tasks;
  }
}
