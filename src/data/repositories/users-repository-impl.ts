import UsersRepository from '../../domain/repositories/users-repository';
import User from '../../domain/models/user';
import { Http } from '../../helpers/http';

export default class UsersRepositoryImpl implements UsersRepository {
  private host = `${
    process.env.REACT_APP_API_URL ?? 'http://localhost:5000'
  }/api/v1/users`;

  private http = new Http('', false);

  async findByValue(value: string): Promise<User[]> {
    try {
      const url = `${this.host}/search?value=${value}`;
      const response = await this.http.request<{ users: User[] }>(url);
      if (response.error) {
        throw new Error(response.error?.message ?? 'fail request');
      }
      return response.data?.users ?? [];
    } catch (error) {
      return [];
    }
  }

  async getCoordinatorsAndTechnicals(): Promise<User[]> {
    try {
      const url = `${this.host}/coordinators-technicals`;
      const response = await this.http.request<{ users: User[] }>(url);
      if (response.error) {
        throw new Error(response.error?.message ?? 'fail request');
      }
      return response.data?.users ?? [];
    } catch (error) {
      return [];
    }
  }

  async update(_id: string, data: Partial<User>): Promise<User | null> {
    try {
      const url = `${this.host}/${_id}`;
      const response = await this.http.request<{ user: User }>(url, {
        method: 'PUT',
        data
      });
      if (response.error) {
        throw new Error(response.error?.message ?? 'fail request');
      }
      return response.data?.user ?? null;
    } catch (error) {
      return null;
    }
  }
}
