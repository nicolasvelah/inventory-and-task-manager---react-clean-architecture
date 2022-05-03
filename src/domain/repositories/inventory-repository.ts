/* eslint-disable no-unused-vars */
import Inventory, { PayloadCreateInventory } from '../models/inventory';

export interface PayloadAssingUserItem {
  id: string;
  userId: string;
}

/* eslint-disable semi */
export default interface InventoryRepository {
  createInventory(payload: PayloadCreateInventory): Promise<Inventory[]>;
  getAll(inventoryId?: string): Promise<Inventory[]>;
  assingUser(payload: PayloadAssingUserItem[]): Promise<Inventory[]>;
  update(id: string, data: Partial<Inventory>): Promise<Inventory>;
  delete(id: string): Promise<boolean>;
}
