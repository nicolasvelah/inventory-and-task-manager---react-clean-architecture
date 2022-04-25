/* eslint-disable class-methods-use-this */

import Box from '../../domain/models/boxes';
import BoxRepository, {
  ResponseBox
} from '../../domain/repositories/box-repository';
import { axiosRequest } from '../../utils/axios-util';

export default class BoxRepositoryImpl implements BoxRepository {
  async getAll(): Promise<ResponseBox[]> {
    const axios = await axiosRequest();
    const catalogs = await axios.get<{ response: ResponseBox[] }>(
      'api/v1/boxes'
    );

    return catalogs.data.response;
  }

  async create(data: Partial<Box>): Promise<Box> {
    console.log(data);
    // TODO: Change this
    return Promise.resolve({
      _id: '123'
    });
  }
}
