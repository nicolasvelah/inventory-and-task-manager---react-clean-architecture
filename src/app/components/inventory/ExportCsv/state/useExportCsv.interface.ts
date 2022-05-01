import Catalog from '../../../../../domain/models/catalog';
import Fragment from '../../../../../domain/models/fragment';
import { DataCollectedInventory, inventoryStateType } from '../../../../../domain/models/inventory';
import Place from '../../../../../domain/models/place';
import Task from '../../../../../domain/models/task';
import User from '../../../../../domain/models/user';

export interface DataInventoryExcel {
  key: string;
  device: Catalog | string;
  fragment?: Fragment | string;
  place?: Place | string | null;
  user?: User | string;
  task?: Task | string;
  state: inventoryStateType | string;
  installationDate?: string;
  spentMaterial?: number;
  photos?: string[];
  dataCollected?: DataCollectedInventory[];
}

export type UseExportCsv = () => {
  inventory: DataInventoryExcel[];
}
