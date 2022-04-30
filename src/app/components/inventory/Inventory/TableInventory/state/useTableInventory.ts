import { useEffect, useState } from 'react';
import Catalog from '../../../../../../domain/models/catalog';
import Place from '../../../../../../domain/models/place';
import Task from '../../../../../../domain/models/task';
import User from '../../../../../../domain/models/user';
import { momentFormat } from '../../../../../../utils/moment-utils';
import {
  DataTableInventory,
  useInventoryContext
} from '../../../../../context/inventory/InventoryContext/InventoryContext';

const useTableInventory = () => {
  const [dataTable, setDataTable] = useState<DataTableInventory[]>([]);

  const { inventoryList, rowSelection } = useInventoryContext();

  useEffect(() => {
    const newData: DataTableInventory[] = inventoryList.map((inventory) => {
      const place = inventory.place as Place;
      const user = inventory.user as User;
      const device = inventory.device as Catalog;
      return {
        key: inventory._id,
        name: device.device,
        brand: device.brand,
        referenceModel: device.referenceModel,
        category: device.categoryId.name,
        type: inventory.fragment ? 'No controlado' : 'Controlado',
        state: inventory.state,
        technical: user ? `${user.name} ${user.lastName}` : '',
        place: place?.name,
        identifiers: inventory.dataCollected ?? [],
        idTask: (inventory.task as Task)?._id,
        date: inventory.installationDate
          ? momentFormat(inventory.installationDate)
          : ''
      };
    });

    setDataTable(newData);
  }, [inventoryList]);

  return {
    dataTable,
    rowSelection
  };
};

export default useTableInventory;
