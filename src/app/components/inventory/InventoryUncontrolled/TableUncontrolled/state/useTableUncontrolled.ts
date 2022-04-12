import { useEffect, useState } from 'react';
import Catalog from '../../../../../../domain/models/catalog';
import Place from '../../../../../../domain/models/place';
import User from '../../../../../../domain/models/user';
import { momentFormat } from '../../../../../../utils/moment-utils';
import { useInventoryUncontrolledContext } from '../../../../../context/inventory/InventoryUncontrolledContext/InventoryUncontrolledContext';

export interface DataTableUncontrolled {
  key: string;
  device: string;
  place: string;
  user: string;
  state: string;
  installationDate: string;
}

const useTableUncontrolled = () => {
  const [dataTable, setDataTable] = useState<DataTableUncontrolled[]>([]);

  const { inventoryUncontrolled } = useInventoryUncontrolledContext();

  useEffect(() => {
    const newData: DataTableUncontrolled[] = inventoryUncontrolled.map(
      (inventory) => {
        const place = inventory.place as Place;
        const user = inventory.user as User;

        return {
          key: inventory._id,
          device: (inventory.device as Catalog).device,
          place: `${place.colony} ${place.city}`,
          user: `${user.name} ${user.lastName}`,
          state: inventory.state,
          installationDate: inventory.installationDate
            ? momentFormat(inventory.installationDate)
            : ''
        };
      }
    );

    setDataTable(newData);
  }, [inventoryUncontrolled]);

  return {
    dataTable
  };
};

export default useTableUncontrolled;
