/* eslint-disable indent */
import { message } from 'antd';
import { repository } from '../../../../dependecy-injection';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { useCategoryContext } from '../../../context/materials/CategoriesContext';

const useCategories = () => {
  // eslint-disable-next-line object-curly-newline
  const {
    setCategory,
  } = useCategoryContext();
  const { categoriesRepository } = repository;

  const handleChangeFilters = (filtersValue: FiltersValue) => {
    console.log('filtersValue -->', filtersValue);

    const hide = message.loading('Obteniendo categorias ...');
    categoriesRepository
      ?.getCategories()
      .then((values) => {
        setCategory(values);
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

export default useCategories;
