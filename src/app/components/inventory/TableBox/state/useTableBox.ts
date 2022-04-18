import { useEffect, useState } from 'react';
import {
  DataTableBox,
  useBoxContext
} from '../../../../context/inventory/BoxContext/BoxContext';

const useTableBox = () => {
  const [dataTable, setDataTable] = useState<DataTableBox[]>([]);

  const { rowSelection, boxList } = useBoxContext();

  useEffect(() => {
    const newData: DataTableBox[] = boxList.map((box) => {
      return {
        key: box._id,
        fragment: '',
        identifiers: '',
        state: '',
        total: ''
      };
    });

    setDataTable(newData);
  }, [boxList]);

  return {
    dataTable,
    rowSelection
  };
};

export default useTableBox;
