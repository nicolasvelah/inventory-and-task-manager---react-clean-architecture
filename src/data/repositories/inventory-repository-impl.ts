/* eslint-disable class-methods-use-this */
import Inventory from '../../domain/models/inventory';
import InventoryRepository from '../../domain/repositories/inventory-repository';
import { axiosRequest } from '../../utils/axios-util';

export default class InventoryRepositoryImpl implements InventoryRepository {
  async getAll(): Promise<Inventory[]> {
    const axios = await axiosRequest();
    const response = await axios.get<Inventory[]>('api/v1/inventories');

    return response.data;
  }
}
