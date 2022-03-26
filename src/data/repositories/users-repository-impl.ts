/* eslint-disable class-methods-use-this */
import UsersRepository from '../../domain/repositories/users-repository';
import User from '../../domain/models/user';
import { Http } from '../../helpers/http';
import { axiosRequest } from '../../utils/axios-util';

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
    const axios = await axiosRequest();
    const responseUsers = await axios.get<{ users: User[] }>(
      'api/v1/users/coordinators-technicals'
    );

    return responseUsers.data.users;
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
