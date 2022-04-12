/* eslint-disable no-unused-vars */
import Inventory from '../models/inventory';

/* eslint-disable semi */
export default interface InventoryRepository {
  getAll(): Promise<Inventory[]>;
}
