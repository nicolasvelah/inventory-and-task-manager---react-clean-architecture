/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

import Catalog from './catalog';

export default interface Box {
  device?: Catalog | string;
  remainingMaterial?: number | null;
  totalMaterial?: number | null;
  dataCollected?: [JSON] | null;
  createdAt?: string;
  updatedAt?: string;
}
