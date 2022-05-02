/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../../dependecy-injection';
import Catalog from '../../../../../../../domain/models/catalog';
import { useInventoryContext } from '../../../../../../context/inventory/InventoryContext/InventoryContext';

import {
  UseFormInventoryState,
  ValuesFormInventory
} from './useFormInventoryState.interface';

const useFormInventoryState: UseFormInventoryState = () => {
  const [catalog, setCatalog] = useState<Catalog[]>([]);
  const { inventoryRepository, catalogRepository } = repository;
  const { inventoryList, setInventory } = useInventoryContext();

  const onFinishForm = async (values: ValuesFormInventory) => {
    const hide = message.loading('Creando Inventorio ...');
    const { catalogId, state, userId, dataCollected } = values;
    try {
      const payloadCreateInventory = {
        catalogId,
        state,
        userId,
        dataCollected
      };

      const newInventory = await inventoryRepository?.createInventory(
        payloadCreateInventory
      );
      if (newInventory) {
        setInventory([newInventory[0], ...inventoryList]);
      }

      message.success('Inventario creado');
    } catch (error) {
      message.error('Error al crear el inventario');
    } finally {
      hide();
    }
  };

  useEffect(() => {
    if (catalog.length === 0) {
      catalogRepository?.getCatalogs('controlled').then((catalogData) => {
        setCatalog(catalogData);
      });
    }
  }, [catalog]);

  return {
    catalog,
    onFinishForm
  };
};

export default useFormInventoryState;
