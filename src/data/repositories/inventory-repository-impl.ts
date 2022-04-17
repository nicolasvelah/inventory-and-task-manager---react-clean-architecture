/* eslint-disable class-methods-use-this */
import Inventory from '../../domain/models/inventory';
import InventoryRepository, {
  PayloadAssingUserItem
} from '../../domain/repositories/inventory-repository';
import { axiosRequest } from '../../utils/axios-util';

export default class InventoryRepositoryImpl implements InventoryRepository {
  async getAll(): Promise<Inventory[]> {
    const axios = await axiosRequest();
    const response = await axios.get<Inventory[]>('api/v1/inventories');

    return response.data;
  }

  async assingUser(payload: PayloadAssingUserItem[]): Promise<Inventory[]> {
    const axios = await axiosRequest();
    const response = await axios.post<Inventory[]>(
      'api/v1/inventories/user/update',
      {
        data: payload
      }
    );

    return response.data;
  }
}