/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { TypeSpanishCatalogEnum } from '../../../../../domain/models/catalog';
import { momentFormat } from '../../../../../utils/moment-utils';
import { useCatalogContext } from '../../../../context/materials/CatalogContext';
import {
  DataCatalogTable,
  UseCatalogTable
} from './useCatalogTable.interfaces';

const useCatalogTable: UseCatalogTable = () => {
  const [data, setData] = useState<DataCatalogTable[]>([]);

  const { catalogs } = useCatalogContext();

  useEffect(() => {
    const newData: DataCatalogTable[] = catalogs.map((catalog) => ({
      key: catalog._id,
      device: catalog.device,
      brand: catalog.brand,
      model: '', // TODO: Verify parameter
      interface: '', // TODO: Verify parameter
      placeType: '', // TODO: Verify parameter
      type:
        TypeSpanishCatalogEnum[
          catalog.type as 'controlled' | 'notControlled'
        ] ?? '',
      unity: catalog.unitOfMeasurement ?? '',
      createdAt: catalog.createdAt ? momentFormat(catalog.createdAt) : '',
      updatedAt: catalog.updatedAt ? momentFormat(catalog.updatedAt) : ''
    }));
    setData(newData);
  }, [catalogs]);

  return {
    dataTable: data
  };
};

export default useCatalogTable;
