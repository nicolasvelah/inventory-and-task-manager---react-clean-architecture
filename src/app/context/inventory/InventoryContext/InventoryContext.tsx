/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import Inventory from '../../../../domain/models/inventory';

export interface DataTableInventory {
  key: string;
  type: string;
  state: string;
  technical: string;
  place: string;
  identifiers: string;
  idTask: string;
  date: string;
  photoTechnical: string;
}

const INIT_STORE = {
  inventoryList: [] as Inventory[],
  setInventory: (newInventory: Inventory[]) => {},
  rowSelection: {
    selectedRowKeys: [] as string[],
    onChange: (_: any, selectedRows: DataTableInventory[]) => {}
  }
};

type InventoryStore = typeof INIT_STORE;
const InventoryContext = createContext<InventoryStore>(INIT_STORE);

export const useInventoryContext = () => useContext(InventoryContext);

export const InventoryContextProvider: React.FC = ({ children }) => {
  const [inventoryList, setCurrrentInventoryList] = useState<Inventory[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  return (
    <InventoryContext.Provider
      value={{
        inventoryList,
        setInventory: (newInventory: Inventory[]) => {
          setCurrrentInventoryList(newInventory);
        },
        rowSelection: {
          selectedRowKeys,
          onChange: (_, selectedRows) => {
            console.log('selectedRowKeys changed: ', selectedRows);
            setSelectedRowKeys(selectedRows.map((item) => item.key));
          }
        }
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
