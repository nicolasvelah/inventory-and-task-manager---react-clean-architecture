/* eslint-disable no-unused-vars */
import Inventory from '../models/inventory';

export interface PayloadAssingUserItem {
  id: string;
  userId: string;
}

/* eslint-disable semi */
export default interface InventoryRepository {
  getAll(): Promise<Inventory[]>;
  assingUser(payload: PayloadAssingUserItem[]): Promise<Inventory[]>;
}
