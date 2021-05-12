import axios from 'axios';
import User from '../../domain/models/user';
import ApiRepository from '../../domain/repositories/api-repository';

export default class ApiRepositoryImpl implements ApiRepository {
  private host = 'http://localhost:5000';

  async login(email: string, password: string): Promise<{ user: User; token: string } | null> {
    try {
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
    } catch (error) {
      console.log('Error login', error.message);
      return null;
    }
  }
}
