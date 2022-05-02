/* eslint-disable indent */
import { message } from 'antd';
import { useEffect } from 'react';
import { repository } from '../../../../dependecy-injection';
import { useCatalogContext } from '../../../context/materials/CatalogContext';
import { UseCatalog } from './useCatalog.interface';

const useCatalog: UseCatalog = () => {
  const { setCatalogs } = useCatalogContext();
  const { catalogRepository } = repository;

  useEffect(() => {
    const hide = message.loading('Obteniendo catálogos ...');
    catalogRepository
      ?.getCatalogs()
      .then((values) => {
        setCatalogs(values);
      })
      .finally(() => {
        hide();
      });
  }, []);
};

export default useCatalog;
