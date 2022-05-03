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
    taskId?: string;
  }): Promise<TaskResponse> {
    // eslint-disable-next-line object-curly-newline
    const { from, to, page, limit, taskId } = values;

    const axios = await axiosRequest();
    let url = `api/v1/tasks/?from=${from}&to=${to}&page=${page}&limit=${limit}`;

    if (taskId) {
      url += `&taskId=${taskId}`;
    }

    const responseTasks = await axios.get<TaskResponse>(url);

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
      `/api/v1/tasks/user/${userId}/range/${startDate}/${endDate}`
    );

    return responseTasks.data.tasks;
  }

  async delete(id: string): Promise<boolean> {
    const axios = await axiosRequest();
    const responseTasks = await axios.delete<boolean>(`/api/v1/tasks/${id}`);

    return responseTasks.data;
  }

  async update(id: string, data: Partial<Task>): Promise<Task> {
    const axios = await axiosRequest();
    const responseTasks = await axios.put<Task>(
      `/api/v1/tasks/create/${id}`,
      data
    );

    return responseTasks.data;
  }
}
