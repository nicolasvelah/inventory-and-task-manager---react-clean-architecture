/* eslint-disable class-methods-use-this */

import Box from '../../domain/models/boxes';
import Fragments from '../../domain/models/fragment';
import BoxRepository, {
  RequestCreateFragment,
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

  async createFragment(payload: RequestCreateFragment): Promise<Fragments[]> {
    /* const axios = await axiosRequest();
    const response = await axios.post<{ data: Fragments[] }>(
      'api/v1/fragments',
      payload
    );

    return response.data.data; */

    return new Promise((resolve) => {
      console.log(payload);
      setTimeout(() => {
        resolve([]);
      }, 3000);
    });
  }
}
