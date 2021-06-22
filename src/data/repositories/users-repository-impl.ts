import UsersRepository from '../../domain/repositories/users-repository';
import User from '../../domain/models/user';
import { Http } from '../../helpers/http';

export default class UsersRepositoryImpl implements UsersRepository {
  private host = `${process.env.REACT_APP_API_URL ?? 'http://localhost:5000'}/api/v1/users`;

  private http = new Http('', false);

  async getCoordinatorsAndTechnicals(): Promise<User[]> {
    try {
      const url = `${this.host}/coordinators-technicals`;
      console.log('url getCoordinatorsAndTechnicals -->', url);
      const response = await this.http.request<{ users: User[] }>(url);
      console.log('response -->', response);
      if (response.error) throw new Error(response.error?.message ?? 'fail request');
      return response.data?.users ?? [];
    } catch (error) {
      console.log('Error getCoordinatorsAndTechnicals:', error.message);
      return [];
    }
  }
}
