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
      if (response.error) throw new Error(response.error?.message ?? 'fail request');
      return response.data?.tasks ?? [];
    } catch (error) {
      console.log('Error getTasks', error.message);
      return [];
    }
  }
}
