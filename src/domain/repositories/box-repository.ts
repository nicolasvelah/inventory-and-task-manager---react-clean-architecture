/* eslint-disable semi */
import Box from '../models/boxes';
import Catalog from '../models/catalog';
import Fragments from '../models/fragment';
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
    _id: string;
  };
  fragments: FragmentBox[];
}

export interface CreateFragment {
  boxId: string;
  userId: string;
  quantity: number;
}
export interface RequestCreateFragment {
  data: CreateFragment[];
}

/* eslint-disable no-unused-vars */
export default interface BoxRepository {
  createBox(data: Partial<Box>): Promise<ResponseBox>;
  getAll(): Promise<ResponseBox[]>;
  createFragment(payload: RequestCreateFragment): Promise<Fragments[]>;
}
