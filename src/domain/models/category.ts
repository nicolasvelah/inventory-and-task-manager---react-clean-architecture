/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

export default interface Category {
  _id: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CategoryTable {
  key: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PayloadCreateCategory {
    name: string;
    description: string;
}
