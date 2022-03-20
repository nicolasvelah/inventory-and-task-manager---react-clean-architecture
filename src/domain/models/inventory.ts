/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import Place from './place';
import User from './user';
import Task from './task';
import Catalog from './catalog';
import Fragment from './fragment';

enum InventoryState {
  installed,
  free,
  damaged
}
export type inventoryStateType = keyof typeof InventoryState;
export const INVENTORY_STATE_TYPE_LIST = Object.keys(InventoryState);

export interface Photos {
  url: string;
  fecha: Date;
  description: string;
}

export default interface Inventory {
  _id: string;
  device: Catalog | string;
  fragment?: Fragment | string;
  place?: Place | string | null;
  user?: User | string;
  task?: Task | string;
  state: inventoryStateType | string;
  installationDate?: Date;
  spentMaterial?: number;
  photos?: Photos;
  dataCollected?: [JSON];
}
