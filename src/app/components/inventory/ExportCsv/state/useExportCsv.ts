/* eslint-disable indent */
import { useEffect, useState } from 'react';
import Inventory from '../../../../../domain/models/inventory';
import { useInventoryContext } from '../../../../context/inventory/InventoryContext/InventoryContext';
import { DataInventoryExcel, UseExportCsv } from './useExportCsv.interface';

const useExportCsv: UseExportCsv = () => {
  const [data, setData] = useState<DataInventoryExcel[]>([]);

  // eslint-disable-next-line object-curly-newline
  const { inventoryList } = useInventoryContext();

  useEffect(() => {
    const newData: DataInventoryExcel[] = inventoryList.map((item:Inventory) => {
      const {
        _id,
        device,
        fragment,
        place,
        user,
        task,
        state,
        installationDate,
        spentMaterial,
        photos,
        dataCollected,
      } = item;

      return {
        key: _id,
        device,
        fragment,
        place,
        user,
        task,
        state,
        installationDate,
        spentMaterial,
        photos,
        dataCollected,
      };
    });
    setData(newData);
  }, [inventoryList]);

  return {
    inventory: data,
  };
};

export default useExportCsv;
