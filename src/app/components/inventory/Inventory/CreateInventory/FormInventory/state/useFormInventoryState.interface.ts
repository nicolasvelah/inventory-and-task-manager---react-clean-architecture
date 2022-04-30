/* eslint-disable no-unused-vars */

export type UseFormInventoryState = () => {
  onFinishForm: (values: ValuesFormInventory) => Promise<void>; };

export interface ValuesFormInventory {
  catalogId: string;
  state: 'free' | 'damaged' | 'onManteince' | 'unInstalled',
  userId: string;
  dataCollected: DataCollected[];
  photos?: string[];
}

export interface DataCollected {
  name: string;
  value: string;
}
