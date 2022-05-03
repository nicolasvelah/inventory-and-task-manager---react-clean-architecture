/* eslint-disable class-methods-use-this */
import Inventory, {
  PayloadCreateInventory
} from '../../domain/models/inventory';
import InventoryRepository, {
  PayloadAssingUserItem
} from '../../domain/repositories/inventory-repository';
import { axiosRequest } from '../../utils/axios-util';

export default class InventoryRepositoryImpl implements InventoryRepository {
  async getAll(inventoryId?: string): Promise<Inventory[]> {
    const axios = await axiosRequest();

    let url = 'api/v1/inventories';

    if (inventoryId) {
      url += `?inventoryId=${inventoryId}`;
    }
    const response = await axios.get<Inventory[]>(url);

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

  async createInventory(payload: PayloadCreateInventory): Promise<Inventory[]> {
    const axios = await axiosRequest();
    const responseTasks = await axios.post<Inventory>(
      '/api/v1/inventories',
      payload
    );

    return responseTasks.data as unknown as Inventory[];
  }

  async update(id: string, data: Partial<Inventory>): Promise<Inventory> {
    const axios = await axiosRequest();
    const responseTasks = await axios.put<Inventory>(
      `/api/v1/inventories/${id}`,
      data
    );

    return responseTasks.data as unknown as Inventory;
  }

  async delete(id: string): Promise<boolean> {
    const axios = await axiosRequest();
    const responseTasks = await axios.delete<boolean>(
      `/api/v1/inventories/${id}`
    );

    return responseTasks.data;
  }
}
