import { useEffect, useState } from 'react';
import { repository } from '../../../../../../dependecy-injection';
import Category from '../../../../../../domain/models/category';

const useFormCatalogState = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const { categoriesRepository } = repository;

  const onFinishForm = async (values: any) => {
    console.log('values -->', values);
  };

  const onValuesChange = (value: { [k: string]: any }) => {
    console.log('value -->', value);
  };

  useEffect(() => {
    categoriesRepository?.getCategories()
      .then((categoriesData) => {
        setCategories(categoriesData);
      });
  }, [categories]);

  return {
    categories,
    actions: {
      onFinishForm,
      onValuesChange,
    }
  };
};

export default useFormCatalogState;
