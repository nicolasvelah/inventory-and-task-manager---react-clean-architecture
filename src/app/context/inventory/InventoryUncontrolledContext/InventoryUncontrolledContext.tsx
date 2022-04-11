/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import Inventory from '../../../../domain/models/inventory';

const INIT_STORE = {
  inventoryUncontrolled: [] as Inventory[],
  setInventoryUncontrolled: (newInventory: Inventory[]) => {}
};

type InventoryUncontrolledStore = typeof INIT_STORE;
const InventoryUncontrolledContext =
  createContext<InventoryUncontrolledStore>(INIT_STORE);

export const useInventoryUncontrolledContext = () => useContext(InventoryUncontrolledContext);

export const InventoryUncontrolledContextProvider: React.FC = ({
  children
}) => {
  const [inventoryUncontrolled, setCurrrentInventoryUncontrolled] = useState<
    Inventory[]
  >([]);

  return (
    <InventoryUncontrolledContext.Provider
      value={{
        inventoryUncontrolled,
        setInventoryUncontrolled: (newInventory: Inventory[]) => {
          setCurrrentInventoryUncontrolled(newInventory);
        }
      }}
    >
      {children}
    </InventoryUncontrolledContext.Provider>
  );
};
