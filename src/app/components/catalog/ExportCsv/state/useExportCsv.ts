/* eslint-disable indent */
import { useEffect, useState } from 'react';
import Catalog from '../../../../../domain/models/catalog';
import { momentFormat } from '../../../../../utils/moment-utils';
import { useCatalogContext } from '../../../../context/materials/CatalogContext';
import { DataCatalogExcel, UseExportCsv } from './useExportCsv.interface';

const useExportCsv: UseExportCsv = () => {
  const [data, setData] = useState<DataCatalogExcel[]>([]);

  // eslint-disable-next-line object-curly-newline
  const { catalogs } = useCatalogContext();

  useEffect(() => {
    const newData: DataCatalogExcel[] = catalogs.map((item:Catalog) => {
      const {
        _id,
        device,
        brand,
        referenceModel,
        typePlace,
        unitOfMeasurement,
        categoryId,
        state,
        type,
        createdAt,
        updatedAt,
      } = item;

      return {
        key: _id,
        device,
        brand,
        referenceModel,
        typePlace,
        unitOfMeasurement,
        categoryId,
        state,
        type,
        createdAt: createdAt ? momentFormat(createdAt) : '',
        updatedAt: updatedAt ? momentFormat(updatedAt) : '',
      };
    });
    setData(newData);
  }, [catalogs]);

  return {
    catalog: data,
  };
};

export default useExportCsv;
