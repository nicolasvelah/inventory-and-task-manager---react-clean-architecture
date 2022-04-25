/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import {
  DataCollectedBox,
  ResponseBox
} from '../../../../domain/repositories/box-repository';

export interface FragmentBox {
  total: number;
  remaining: number;
  technical?: string;
}

export type FragmentBoxTable = FragmentBox & { unitOfMeasurement?: string };
export interface DataTableBox {
  key: string;
  state: string;
  identifiers: DataCollectedBox;
  total: string;
  fragment: FragmentBoxTable[];
  remaining: string;
}

const INIT_STORE = {
  boxList: [] as ResponseBox[],
  setBoxList: (newBoxList: ResponseBox[]) => {},
  rowSelection: {
    selectedRowKeys: [] as string[],
    onChange: (_: any, selectedRows: DataTableBox[]) => {}
  }
};

type BoxStore = typeof INIT_STORE;
const BoxContext = createContext<BoxStore>(INIT_STORE);

export const useBoxContext = () => useContext(BoxContext);

export const BoxContextProvider: React.FC = ({ children }) => {
  const [boxList, setCurrentBoxList] = useState<ResponseBox[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  return (
    <BoxContext.Provider
      value={{
        boxList,
        setBoxList: (newBoxList: ResponseBox[]) => {
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
