/* eslint-disable no-unused-vars */
/* eslint-disable semi */

import User from '../models/user';

export default interface UsersRepository {
  findByValue(value: string): Promise<User[]>;
  getCoordinatorsAndTechnicals(): Promise<User[]>;
  getTechnicals(search?: string): Promise<User[]>;
  update(_id: string, data: Partial<User>): Promise<User>;
  create(data: Partial<User>): Promise<User>;
  delete(_id: string): Promise<boolean>;
  updatePass(args: {
    password: string;
    confirmPassword: string;
    email: string;
    token: string;
  }): Promise<boolean>;
}
