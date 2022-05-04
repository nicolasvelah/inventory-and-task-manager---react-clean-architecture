/* eslint-disable indent */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../dependecy-injection';
import Catalog, {
  TypeSpanishCatalogEnum
} from '../../../../../domain/models/catalog';
import { momentFormat } from '../../../../../utils/moment-utils';
import { useCatalogContext } from '../../../../context/materials/CatalogContext';
import {
  DataCatalogTable,
  UseCatalogTable
} from './useCatalogTable.interfaces';

const useCatalogTable: UseCatalogTable = () => {
  const [data, setData] = useState<DataCatalogTable[]>([]);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [valueToEdit, setValueToEdit] = useState<Catalog | null>(null);

  const { catalogs, setCatalogs } = useCatalogContext();
  const { catalogRepository } = repository;

  useEffect(() => {
    const newData: DataCatalogTable[] = catalogs.map((catalog) => ({
      key: catalog._id,
      device: catalog.device,
      brand: catalog.brand,
      model: catalog.referenceModel,
      interface: '', // TODO: Verify parameter
      placeType: '', // TODO: Verify parameter
      type:
        TypeSpanishCatalogEnum[
          catalog.type as 'controlled' | 'notControlled'
        ] ?? '',
      unity: catalog.unitOfMeasurement ?? '',
      category: catalog.categoryId.name,
      categoryDescription: catalog.categoryId.description,
      createdAt: catalog.createdAt ? momentFormat(catalog.createdAt) : '',
      updatedAt: catalog.updatedAt ? momentFormat(catalog.updatedAt) : '',
      data: catalog
    }));
    setData(newData);
  }, [catalogs]);

  const handleEdit = (categoryToEdit: Catalog) => {
    setValueToEdit(categoryToEdit);
    setViewModal(true);
  };

  const handleDelete = (id: string) => {
    const hide = message.loading('Eliminando catálogo');
    catalogRepository
      ?.delete(id)
      .then((deleted) => {
        if (deleted) {
          const newCategories = catalogs.filter((item) => item._id !== id);
          setCatalogs(newCategories);
        }
      })
      .finally(() => {
        hide();
      });
  };

  const openModal = () => setViewModal(true);
  const closeModal = () => setViewModal(false);

  return {
    actions: {
      handleEdit,
      handleDelete,
      openModal,
      closeModal
    },
    viewModal,
    valueToEdit,
    dataTable: data
  };
};

export default useCatalogTable;
