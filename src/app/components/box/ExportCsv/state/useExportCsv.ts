/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { ResponseBox } from '../../../../../domain/repositories/box-repository';
import { useBoxContext } from '../../../../context/inventory/BoxContext/BoxContext';
import { UseExportCsv } from './useExportCsv.interface';

const useExportCsv: UseExportCsv = () => {
  const [data, setData] = useState<ResponseBox[]>([]);

  // eslint-disable-next-line object-curly-newline
  const { boxList } = useBoxContext();

  useEffect(() => {
    const newData: ResponseBox[] = boxList.map((item:ResponseBox) => {
      const {
        attributes,
        fragments
      } = item;

      return {
        attributes,
        fragments
      };
    });
    setData(newData);
  }, [boxList]);

  return {
    boxes: data,
  };
};

export default useExportCsv;
