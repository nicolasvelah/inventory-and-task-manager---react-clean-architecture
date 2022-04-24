/* eslint-disable class-methods-use-this */
import UsersRepository from '../../domain/repositories/users-repository';
import User from '../../domain/models/user';
import { axiosRequest } from '../../utils/axios-util';

export default class UsersRepositoryImpl implements UsersRepository {
  async findByValue(value: string): Promise<User[]> {
    const axios = await axiosRequest();
    const responseUsers = await axios.get<{ users: User[] }>(
      `ﬁapi/v1/users/search?value=${value}`
    );

    return responseUsers.data.users;
  }

  async getCoordinatorsAndTechnicals(): Promise<User[]> {
    const axios = await axiosRequest();
    const responseUsers = await axios.get<{ users: User[] }>(
      'api/v1/users/coordinators-technicals'
    );

    return responseUsers.data.users;
  }

  async update(_id: string, data: Partial<User>): Promise<User | null> {
    const axios = await axiosRequest();
    const responseUsers = await axios.get<{ user: User }>(
      `api/v1/users/${_id}`,
      {
        method: 'PUT',
        data
      }
    );

    return responseUsers.data.user;
  }

  async create(data: Partial<User>): Promise<User> {
    const axios = await axiosRequest();
    const responseCreate = await axios.post<User>('/api/v1/users/create', data);

    return responseCreate.data;
  }
}
