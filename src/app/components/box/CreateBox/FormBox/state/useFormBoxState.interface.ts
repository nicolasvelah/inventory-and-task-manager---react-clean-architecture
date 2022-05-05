/* eslint-disable no-unused-vars */

import Catalog from '../../../../../../domain/models/catalog';
import { ResponseBox } from '../../../../../../domain/repositories/box-repository';

export type UseFormBoxState = (initValues?: ResponseBox) => {
  catalog: Catalog[];
  onFinishForm: (values: ValuesFormBox) => Promise<void>;
};

export interface ValuesFormBox {
  catalogId: string;
  totalMaterial: number;
  dataCollected: DataCollected[];
}

export interface DataCollected {
  name: string;
  value: string;
}
