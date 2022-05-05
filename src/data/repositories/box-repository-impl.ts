/* eslint-disable class-methods-use-this */

import Box, { PayloadCreateBox } from '../../domain/models/boxes';
import Fragments from '../../domain/models/fragment';
import BoxRepository, {
  RequestCreateFragment,
  ResponseBox
} from '../../domain/repositories/box-repository';
import { axiosRequest } from '../../utils/axios-util';

export default class BoxRepositoryImpl implements BoxRepository {
  async getAll(): Promise<ResponseBox[]> {
    const axios = await axiosRequest();
    const response = await axios.get<{ response: ResponseBox[] }>(
      'api/v1/boxes'
    );

    return response.data.response;
  }

  async createBox(payload: PayloadCreateBox): Promise<ResponseBox> {
    const axios = await axiosRequest();
    const response = await axios.post<Box>('/api/v1/boxes', payload);
    const box = response.data as unknown as ResponseBox[];
    return box[0] as ResponseBox;
  }

  async createFragment(payload: RequestCreateFragment): Promise<Fragments[]> {
    const axios = await axiosRequest();
    const response = await axios.post<{ data: Fragments[] }>(
      'api/v1/fragments',
      payload
    );

    return response.data.data;
  }

  async delete(id: string): Promise<boolean> {
    const axios = await axiosRequest();
    const response = await axios.delete<boolean>(`/api/v1/boxes/${id}`);

    return response.data;
  }

  async update(
    id: string,
    data: Partial<PayloadCreateBox>
  ): Promise<ResponseBox> {
    const axios = await axiosRequest();
    const response = await axios.put<ResponseBox>(`/api/v1/boxes/${id}`, data);

    return response.data;
  }
}
