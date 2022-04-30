import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../dependecy-injection';
import { CatalogRequest } from '../../../../../../domain/models/catalog';
import Category from '../../../../../../domain/models/category';
import { useCatalogContext } from '../../../../../context/materials/CatalogContext';

const useFormCatalogState = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const { categoriesRepository, catalogRepository } = repository;

  const { catalogs, setCatalogs } = useCatalogContext();

  const onFinishForm = async (values: CatalogRequest) => {
    const hide = message.loading('Creando un item en el catálogo ...');
    const newCatalog = await catalogRepository?.createCatalog(values);
    if (newCatalog) {
      setCatalogs([newCatalog, ...catalogs]);
    }
    hide();
  };

  const onValuesChange = (value: { [k: string]: any }) => {
    console.log('value -->', value);
  };

  useEffect(() => {
    if (categories.length === 0) {
      categoriesRepository?.getCategories()
        .then((categoriesData) => {
          setCategories(categoriesData);
        });
    }
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
