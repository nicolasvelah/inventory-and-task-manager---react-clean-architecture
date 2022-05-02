import { DataTableBox } from '../../../context/inventory/BoxContext/BoxContext';

export interface DetailTaskBox {
  activeBox: DataTableBox | null;
  onCloseDrawer: () => void;
  visibleDrawer: boolean;
}
