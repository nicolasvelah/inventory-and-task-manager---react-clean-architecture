/* eslint-disable class-methods-use-this */
import Place, { PayloadCreatePlace } from '../../domain/models/place';
import PlacesRepository from '../../domain/repositories/places-repository';
import { axiosRequest } from '../../utils/axios-util';

export default class PlacesRepositoryImpl implements PlacesRepository {
  async createPlace(payload: PayloadCreatePlace): Promise<Place> {
    const axios = await axiosRequest();
    const responseTasks = await axios.post<Place>(
      '/api/v1/places/create',
      payload
    );

    return responseTasks.data;
  }

  async getPlaces(): Promise<Place[]> {
    const axios = await axiosRequest();
    const places = await axios.get<Place[]>('api/v1/places');

    return places.data;
  }

  async delete(id: string): Promise<boolean> {
    const axios = await axiosRequest();
    const places = await axios.delete<boolean>(`api/v1/places/${id}`);

    return places.data;
  }

  async update(id: string, data: Partial<Place>): Promise<Place> {
    const axios = await axiosRequest();
    const places = await axios.put<Place>(`api/v1/places/${id}`, data);

    return places.data;
  }
}
