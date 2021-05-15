/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import User from '../models/user';

export default interface ApiRepository {
  login(email: string, password: string): Promise<{ user: User; token: string } | null>;
  getUserById(id: string): Promise<User | null>;
}
