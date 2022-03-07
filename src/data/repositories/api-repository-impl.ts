import axios from 'axios';
import User from '../../domain/models/user';
import ApiRepository from '../../domain/repositories/api-repository';

export default class ApiRepositoryImpl implements ApiRepository {
  private host = process.env.REACT_APP_API_URL ?? 'http://localhost:5000';

  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    const url = `${this.host}/api/v1/users/login`;
    const data = {
      email,
      password
    };
    const response = await axios({
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    });
    return response.data;
  }

  async getUserById(id: string): Promise<User | null> {
    try {
      const url = `${this.host}/api/v1/users/id/${id}`;
      const response = await axios({
        url,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data.user;
    } catch (error) {
      return null;
    }
  }
}
