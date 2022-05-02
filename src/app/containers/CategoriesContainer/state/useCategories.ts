/* eslint-disable indent */
import { message } from 'antd';
import { useEffect } from 'react';
import { repository } from '../../../../dependecy-injection';
import { useCategoryContext } from '../../../context/materials/CategoriesContext';

const useCategories = () => {
  // eslint-disable-next-line object-curly-newline
  const { setCategory } = useCategoryContext();
  const { categoriesRepository } = repository;

  useEffect(() => {
    const hide = message.loading('Obteniendo categorias ...');
    categoriesRepository
      ?.getCategories()
      .then((values) => {
        setCategory(values);
      })
      .finally(() => {
        hide();
      });
  }, []);
};

export default useCategories;
