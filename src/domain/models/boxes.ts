/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

import Catalog from './catalog';

export interface DataCollected {
  name: string;
  value: string;
}

export default interface Box {
  _id: string;
  device?: Catalog | string;
  remainingMaterial?: number | null;
  totalMaterial?: number | null;
  dataCollected?: [JSON] | null;
  createdAt?: string;
  updatedAt?: string;
}
export interface CreateBoxRequest {
  device?: Catalog | string;
  remainingMaterial?: number | null;
  totalMaterial?: number | null;
  dataCollected?: DataCollected[] | null;
  createdAt?: string;
  updatedAt?: string;
}
export interface PayloadCreateBox {
  catalogId: string;
  totalMaterial: number;
  dataCollected: DataCollected[];
}
