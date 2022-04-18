/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import Box from '../../../../domain/models/boxes';

export interface DataTableBox {
  key: string;
  state: string;
  identifiers: string;
  total: string;
  fragment: string;
}

const INIT_STORE = {
  boxList: [] as Box[],
  setBoxList: (newBoxList: Box[]) => {},
  rowSelection: {
    selectedRowKeys: [] as string[],
    onChange: (_: any, selectedRows: DataTableBox[]) => {}
  }
};

type BoxStore = typeof INIT_STORE;
const BoxContext = createContext<BoxStore>(INIT_STORE);

export const useBoxContext = () => useContext(BoxContext);

export const BoxContextProvider: React.FC = ({ children }) => {
  const [boxList, setCurrentBoxList] = useState<Box[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  return (
    <BoxContext.Provider
      value={{
        boxList,
        setBoxList: (newBoxList: Box[]) => {
          setCurrentBoxList(newBoxList);
        },
        rowSelection: {
          selectedRowKeys,
          onChange: (_, selectedRows) => {
            setSelectedRowKeys(selectedRows.map((item) => item.key));
          }
        }
      }}
    >
      {children}
    </BoxContext.Provider>
  );
};
