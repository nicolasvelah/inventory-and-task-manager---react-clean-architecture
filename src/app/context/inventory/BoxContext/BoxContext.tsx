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
export interface FragmentValue {
  value: string;
  unitOfMeasurement: string;
}
export interface DataTableBox {
  key: string;
  state: string;
  name: string;
  identifiers: DataCollectedBox;
  total: string;
  totalFragment: FragmentValue[];
  remainingFragment: FragmentValue[];
  technicalFragment: FragmentValue[];
  remaining: string;
  data: ResponseBox;
}

const INIT_STORE = {
  boxList: [] as ResponseBox[],
  setBoxList: (newBoxList: ResponseBox[]) => {},
  rowSelection: {
    selectedRowKeys: [] as string[],
    onChange: (_: any, selectedRows: DataTableBox[]) => {},
    getCheckboxProps: (record: DataTableBox) => ({
      disabled: false as boolean | undefined
    })
  },
  viewDrawer: false,
  setViewDrawer: (view: boolean) => {},
  itemSelected: null as DataTableBox | null,
  setItemSelected: (item: DataTableBox | null) => {},
  viewFragmentModal: false,
  setViewFragmentModal: (view: boolean) => {},
  itemsSelectedModal: [] as DataTableBox[],
  setItemsSelectedModal: (items: DataTableBox[]) => {},
  viewFragmentButton: false,
  setViewFragmentButton: (view: boolean) => {},
  canItBeFragmented: (item: DataTableBox) => false
};

type BoxStore = typeof INIT_STORE;
const BoxContext = createContext<BoxStore>(INIT_STORE);

export const useBoxContext = () => useContext(BoxContext);

export const BoxContextProvider: React.FC = ({ children }) => {
  const [boxList, setCurrentBoxList] = useState<ResponseBox[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [viewDrawer, setCurrentViewDrawer] = useState<boolean>(false);
  const [itemSelected, setCurrentItemSelected] = useState<DataTableBox | null>(
    null
  );
  const [viewFragmentModal, setCurrentViewFragmentModal] =
    useState<boolean>(false);
  const [itemsSelectedModal, setCurrentItemsSelectedModal] = useState<
    DataTableBox[]
  >([]);
  const [viewFragmentButton, setCurrentViewFragmentButton] =
    useState<boolean>(false);

  const canItBeFragmented = (item: DataTableBox) => {
    const total = item.data.attributes.totalMaterial;

    const remaining = item.totalFragment.reduce((accum, current) => {
      return accum + (Number(current.value) ?? 0);
    }, 0);

    const maxToAssign = total - remaining;

    return maxToAssign <= 0;
  };

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
            setCurrentViewFragmentButton(selectedRows.length > 0);
            setSelectedRowKeys(selectedRows.map((item) => item.key));
            setCurrentItemsSelectedModal(selectedRows);
          },
          getCheckboxProps: (record: DataTableBox) => ({
            disabled: canItBeFragmented(record)
          })
        },
        itemSelected,
        setItemSelected: (item: DataTableBox | null) => {
          setCurrentItemSelected(item);
        },
        viewDrawer,
        setViewDrawer: (view: boolean) => {
          setCurrentViewDrawer(view);
        },

        itemsSelectedModal,
        setItemsSelectedModal: (items: DataTableBox[]) => {
          setCurrentItemsSelectedModal(items);
        },
        viewFragmentModal,
        setViewFragmentModal: (view: boolean) => {
          setCurrentViewFragmentModal(view);
        },
        viewFragmentButton,
        setViewFragmentButton: (view: boolean) => {
          setCurrentViewFragmentButton(view);
        },
        canItBeFragmented
      }}
    >
      {children}
    </BoxContext.Provider>
  );
};
