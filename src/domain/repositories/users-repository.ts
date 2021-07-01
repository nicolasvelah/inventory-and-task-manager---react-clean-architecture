/* eslint-disable no-unused-vars */
/* eslint-disable semi */

import User from '../models/user';

export default interface UsersRepository {
  findByValue(value: string): Promise<User[]>;
  getCoordinatorsAndTechnicals(): Promise<User[]>;
}
