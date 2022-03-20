/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

import User from './user';
import Box from './boxes';

export default interface Fragments {
  _id: string;
  owner: User | string;
  box: Box | string;
  remainingFragment: number | null;
  totalFragment: number | null;
  createdAt?: string;
  updatedAt?: string;
}
