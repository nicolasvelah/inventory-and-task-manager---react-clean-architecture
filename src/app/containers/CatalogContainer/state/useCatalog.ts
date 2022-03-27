/* eslint-disable indent */
import { message } from 'antd';
import { repository } from '../../../../dependecy-injection';
import Catalog from '../../../../domain/models/catalog';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { useCatalogContext } from '../../../context/materials/CatalogContext';
import { UseCatalog } from './useCatalog.interface';

const useCatalog: UseCatalog = () => {
  const { setCatalogs } = useCatalogContext();
  const { catalogRepository } = repository;

  const setCatalogList = (newCatalogs: Catalog[]) => {
    setCatalogs(newCatalogs);
  };

  const handleChangeFilters = (filtersValue: FiltersValue) => {
    if (filtersValue.text) {
      console.log(filtersValue.text);
    }

    const hide = message.loading('Obteniendo catálogos ...');
    catalogRepository
      ?.getCatalogs()
      .then((values) => {
        setCatalogList(values ?? []);
      })
      .finally(() => {
        hide();
      });
  };

  return {
    actions: {
      handleChangeFilters
    }
  };
};

export default useCatalog;
