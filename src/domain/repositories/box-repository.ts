/* eslint-disable semi */
import Box from '../models/boxes';

export interface ResponseGetAllBoxes {
  attributes: any;
  fragments: any;
}

/* eslint-disable no-unused-vars */
export default interface BoxRepository {
  create(data: Partial<Box>): Promise<Box>;
  getAll(): Promise<ResponseGetAllBoxes[]>;
}
