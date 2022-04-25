/* eslint-disable semi */
import Box from '../models/boxes';
import Catalog from '../models/catalog';
import Inventory from '../models/inventory';

export interface DataCollectedBox {
  name: string;
  value: string;
}

type InventoryBox = Inventory & { spentMaterial: number };

export interface FragmentBox {
  attributes: {
    remainingFragment: number;
    totalFragment: number;
    _id: string;
  };
  inventory: InventoryBox[];
}
export interface ResponseBox {
  attributes: {
    dataCollected: DataCollectedBox;
    device: Catalog;
    remainingMaterial: number;
    totalMaterial: number;
  };
  fragments: FragmentBox[];
}

/* eslint-disable no-unused-vars */
export default interface BoxRepository {
  create(data: Partial<Box>): Promise<Box>;
  getAll(): Promise<ResponseBox[]>;
}
