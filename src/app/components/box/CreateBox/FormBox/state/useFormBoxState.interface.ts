/* eslint-disable no-unused-vars */

import Catalog from '../../../../../../domain/models/catalog';

export type UseFormBoxState = () => {
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
