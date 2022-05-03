/* eslint-disable no-unused-vars */

import Catalog from '../../../../../../../domain/models/catalog';
import Inventory from '../../../../../../../domain/models/inventory';

export type UseFormInventoryState = (initValues?: Inventory) => {
  catalog: Catalog[];
  onFinishForm: (values: ValuesFormInventory) => Promise<void>;
};

export interface ValuesFormInventory {
  device: string;
  state: 'free' | 'damaged' | 'onManteince' | 'unInstalled';
  userId: string;
  dataCollected: DataCollected[];
  photos?: string[];
}

export interface DataCollected {
  name: string;
  value: string;
}
