import { useEffect, useState } from 'react';
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

      return {
        key: inventory._id,
        type: inventory.fragment ? 'No controlado' : 'Controlado',
        state: inventory.state,
        technical: user ? `${user.name} ${user.lastName}` : '',
        place: place?.name,
        identifiers: '', // TODO: validate param
        idTask: (inventory.task as Task)?._id,
        date: inventory.installationDate
          ? momentFormat(inventory.installationDate)
          : '',
        photoTechnical: '' // TODO validate this param
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
