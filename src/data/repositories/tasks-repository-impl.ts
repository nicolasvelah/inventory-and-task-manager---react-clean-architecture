/* eslint-disable semi-spacing */
import Task from '../../domain/models/task';

import TasksRepository from '../../domain/repositories/tasks-repository';
import { Http } from '../../helpers/http';

export default class TasksRepositoryImpl implements TasksRepository {
  private host = process.env.REACT_APP_API_URL ?? 'http://localhost:5000';

  private http = new Http('', false);

  async getTasks(): Promise<Task[]> {
    try {
      const url = `${this.host}/api/v1/tasks/`;

      const response = await this.http.request<{ tasks: Task[] }>(url);
      if (response.error) {
        throw new Error(response.error?.message ?? 'fail request');
      }
      return response.data?.tasks ?? [];
    } catch (error) {
      return [];
    }
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
