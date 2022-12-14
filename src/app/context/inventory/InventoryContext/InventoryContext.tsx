/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import Inventory, {
  DataCollectedInventory
} from '../../../../domain/models/inventory';

export interface DataTableInventory {
  key: string;
  type: string;
  state: string;
  technical: string;
  place: string;
  identifiers: DataCollectedInventory[];
  idTask: string;
  date: string;
  data: Inventory;
}

const INIT_STORE = {
  inventoryList: [] as Inventory[],
  setInventory: (newInventory: Inventory[]) => {},
  rowSelection: {
    selectedRowKeys: [] as string[],
    onChange: (_: any, selectedRows: DataTableInventory[]) => {},
    getCheckboxProps: (record: DataTableInventory) => ({
      disabled: false as boolean | undefined
    })
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
            setSelectedRowKeys(selectedRows.map((item) => item.key));
          },
          getCheckboxProps: (record: DataTableInventory) => ({
            disabled: record.place !== '' && !!record.place
          })
        }
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
