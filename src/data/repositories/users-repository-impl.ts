/* eslint-disable class-methods-use-this */
import Axios from 'axios';
import UsersRepository from '../../domain/repositories/users-repository';
import User from '../../domain/models/user';
import { axiosRequest } from '../../utils/axios-util';

export default class UsersRepositoryImpl implements UsersRepository {
  async findByValue(value: string): Promise<User[]> {
    const axios = await axiosRequest();
    const responseUsers = await axios.get<{ users: User[] }>(
      `api/v1/users/search?value=${value}`
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

  async update(_id: string, data: Partial<User>): Promise<User> {
    const axios = await axiosRequest();
    const responseUsers = await axios.put<{ user: User }>(
      `api/v1/users/${_id}`,
      data
    );

    return responseUsers.data.user;
  }

  async create(data: Partial<User>): Promise<User> {
    const axios = await axiosRequest();
    const responseCreate = await axios.post<User>('/api/v1/users/create', data);

    return responseCreate.data;
  }

  async delete(_id: string): Promise<boolean> {
    const axios = await axiosRequest();
    const responseCreate = await axios.delete<boolean>(`api/v1/users/${_id}`);

    return responseCreate.data;
  }

  async updatePass(args: {
    password: string;
    confirmPassword: string;
    email: string;
    token: string;
  }): Promise<boolean> {
    const data = {
      password: args.password,
      confirmPassword: args.confirmPassword,
      email: args.email
    };

    await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/update-password`,
      data,
      {
        headers: {
          'x-access-token': args.token,
          'Content-type': 'application/json'
        }
      }
    );

    return true;
  }
}
