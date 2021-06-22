/* eslint-disable no-unused-vars */
/* eslint-disable semi */

import User from '../models/user';

export default interface UsersRepository {
  getCoordinatorsAndTechnicals(): Promise<User[]>;
}
