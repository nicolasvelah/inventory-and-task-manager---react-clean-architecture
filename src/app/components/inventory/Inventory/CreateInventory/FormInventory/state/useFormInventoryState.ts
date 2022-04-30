/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { repository } from '../../../../../../../dependecy-injection';
import { useInventoryContext } from '../../../../../../context/inventory/InventoryContext/InventoryContext';

import { UseFormInventoryState, ValuesFormInventory } from './useFormInventoryState.interface';

const useFormInventoryState: UseFormInventoryState = () => {
  const { inventoryRepository } = repository;
  const { inventoryList, setInventory } = useInventoryContext();

  const onFinishForm = async (values: ValuesFormInventory) => {
    const hide = message.loading('Creando Inventorio ...');
    const {
      catalogId, state, userId, dataCollected
    } = values;
    try {
      const payloadCreateInventory = {
        catalogId,
        state,
        userId,
        dataCollected
      };
      console.log({ payloadCreateInventory });

      const newInventory = await inventoryRepository?.createInventory(payloadCreateInventory);
      if (newInventory) {
        console.log({ inventoryList });
        setInventory([newInventory, ...inventoryList]);
        console.log({ inventoryList });
      }

      message.success('Inventario creado');
    } catch (error) {
      message.error('Error al crear el inventario');
    } finally {
      hide();
    }
  };

  return {
    onFinishForm
  };
};

export default useFormInventoryState;
