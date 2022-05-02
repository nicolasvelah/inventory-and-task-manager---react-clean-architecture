import { message } from 'antd';
import { repository } from '../../../../../../dependecy-injection';
import Category, {
  PayloadCreateCategory
} from '../../../../../../domain/models/category';
import { useCategoryContext } from '../../../../../context/materials/CategoriesContext';

const useFormCategoriesState = (initValues?: Category) => {
  const { categoriesRepository } = repository;

  const { categories, setCategory } = useCategoryContext();

  const onFinishForm = async (values: PayloadCreateCategory) => {
    if (initValues) {
      const hideUpdate = message.loading('Actualizando una categoría ...');
      categoriesRepository
        ?.update(initValues._id, values)
        .then((newCategory) => {
          const newCategoryList = categories.map((item) => {
            if (item._id === initValues._id) {
              return newCategory;
            }

            return item;
          });
          setCategory(newCategoryList);
        })
        .finally(() => {
          hideUpdate();
        });

      return;
    }

    const hide = message.loading('Creando una categoría ...');
    const newCategories = await categoriesRepository?.create(values);
    if (newCategories) {
      setCategory([newCategories, ...categories]);
    }
    hide();
  };

  const onValuesChange = (value: { [k: string]: any }) => {
    console.log('value -->', value);
  };

  return {
    actions: {
      onFinishForm,
      onValuesChange
    }
  };
};

export default useFormCategoriesState;
