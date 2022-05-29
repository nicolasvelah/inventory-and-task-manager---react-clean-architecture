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
  const [isControlled, setIsControlled] = useState(false);

  const [form] = Form.useForm();

  const { categoriesRepository, catalogRepository } = repository;

  const { catalogs, setCatalogs } = useCatalogContext();

  const getCategories = () => {
    categoriesRepository?.getCategories().then((categoriesData) => {
      setCategories(categoriesData);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

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

    catalogRepository
      ?.createCatalog(values)
      .then((newCatalog) => {
        setCatalogs([newCatalog, ...catalogs]);
        message.success('Catálogo creado.');
      })
      .finally(() => {
        hide();
      })
      .catch(() => {
        message.error('No se pudo crear el catálogo.');
      });
  };

  const onValuesChange = (value: { [k: string]: any }) => {
    if (value.type) {
      const verifyType = value.type === 'controlled';
      setIsControlled(verifyType);
    }
  };

  return {
    form,
    categories,
    isControlled,
    actions: {
      onFinishForm,
      onValuesChange
    }
  };
};

export default useFormCatalogState;
