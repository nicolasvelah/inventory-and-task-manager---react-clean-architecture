/* eslint-disable object-curly-newline */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../dependecy-injection';
import Catalog from '../../../../../../domain/models/catalog';
import Inventory from '../../../../../../domain/models/inventory';
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
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [valueToEdit, setValueToEdit] = useState<Inventory | null>(null);

  const { inventoryList, rowSelection, setInventory } = useInventoryContext();
  const { inventoryRepository } = repository;

  useEffect(() => {
    const newData: DataTableInventory[] = inventoryList.map((inventory) => {
      const place = inventory.place as Place;
      const user = inventory.user as User;
      const device = inventory.device as Catalog;
      return {
        key: inventory._id,
        name: device ? device.device : 'no',
        brand: device ? device.brand : 'no',
        referenceModel: device ? device.referenceModel : 'no',
        category: device ? device.categoryId.name : 'no',
        type: inventory.fragment ? 'No controlado' : 'Controlado',
        state: inventory.state,
        technical: user ? `${user.name} ${user.lastName}` : '',
        place: place?.name,
        identifiers: inventory.dataCollected ?? [],
        idTask: (inventory.task as Task)?._id,
        date: inventory.installationDate
          ? momentFormat(inventory.installationDate)
          : '',
        data: inventory
      };
    });

    setDataTable(newData);
  }, [inventoryList]);

  const handleEdit = (inventoryToEdit: Inventory) => {
    setValueToEdit(inventoryToEdit);
    setViewModal(true);
  };

  const handleDelete = (id: string) => {
    const hide = message.loading('Eliminando categoría');
    inventoryRepository
      ?.delete(id)
      .then((deleted) => {
        if (deleted) {
          const newInventories = inventoryList.filter((item) => item._id !== id);
          setInventory(newInventories);
        }
      })
      .finally(() => {
        hide();
      });
  };

  const openModal = () => setViewModal(true);
  const closeModal = () => setViewModal(false);

  return {
    actions: { handleEdit, handleDelete, openModal, closeModal },
    viewModal,
    valueToEdit,
    dataTable,
    rowSelection
  };
};

export default useTableInventory;
