/* eslint-disable class-methods-use-this */
/* eslint-disable semi-spacing */
import Task from '../../domain/models/task';

import TasksRepository, {
  PayloadCreateTask,
  TaskResponse
} from '../../domain/repositories/tasks-repository';
import { Http } from '../../helpers/http';
import { axiosRequest } from '../../utils/axios-util';

export default class TasksRepositoryImpl implements TasksRepository {
  private host = process.env.REACT_APP_API_URL ?? 'http://localhost:5000';

  private http = new Http('', false);

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
    try {
      const url = `${this.host}/api/v1/tasks/user/${userId}`;

      const response = await this.http.request<{ tasks: Task[] }>(url);
      if (response.error) {
        throw new Error(response.error?.message ?? 'fail request');
      }
      return response.data?.tasks ?? [];
    } catch (error) {
      return [];
    }
  }

  async getAllByIdUserAndRangeDates(
    userId: string,
    startDate: string,
    endDate: string
  ): Promise<Task[]> {
    try {
      const url = `${this.host}/api/v1/tasks/user/${userId}/range/${startDate}/${endDate}`;

      const response = await this.http.request<{ tasks: Task[] }>(url);
      if (response.error) {
        throw new Error(response.error?.message ?? 'fail request');
      }
      return response.data?.tasks ?? [];
    } catch (error) {
      return [];
    }
  }
}
