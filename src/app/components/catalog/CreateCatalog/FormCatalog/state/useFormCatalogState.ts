import { Form, message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../dependecy-injection';
import Catalog, {
  CatalogRequest
} from '../../../../../../domain/models/catalog';
import Category from '../../../../../../domain/models/category';
import { useCatalogContext } from '../../../../../context/materials/CatalogContext';

const useFormCatalogState = (initValues?: Catalog) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [form] = Form.useForm();

  const { categoriesRepository, catalogRepository } = repository;

  const { catalogs, setCatalogs } = useCatalogContext();

  const onFinishForm = async (values: CatalogRequest) => {
    if (initValues) {
      const hideUpdated = message.loading(
        'Actualizando un item del catálogo ...'
      );

      catalogRepository
        ?.update(initValues._id, values)
        .then((catalogUpdated) => {
          const newCatalog = catalogs.map((item) => {
            if (item._id === catalogUpdated._id) {
              return catalogUpdated;
            }
            return item;
          });
          setCatalogs(newCatalog);
          message.success('Catálogo actualizado.');
        })
        .finally(() => {
          hideUpdated();
        })
        .catch(() => {
          message.error('No se pudo actualizar el catálogo.');
        });

      return;
    }
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
    categoriesRepository?.getCategories().then((categoriesData) => {
      setCategories(categoriesData);
    });
  }, []);

  return {
    form,
    categories,
    actions: {
      onFinishForm,
      onValuesChange
    }
  };
};

export default useFormCatalogState;
