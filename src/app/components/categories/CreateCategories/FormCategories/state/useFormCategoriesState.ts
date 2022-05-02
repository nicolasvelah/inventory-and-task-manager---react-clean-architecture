import { message } from 'antd';
import { repository } from '../../../../../../dependecy-injection';
import { PayloadCreateCategory } from '../../../../../../domain/models/category';
import { useCategoryContext } from '../../../../../context/materials/CategoriesContext';

const useFormCategoriesState = () => {
  const { categoriesRepository } = repository;

  const { categories, setCategory } = useCategoryContext();

  const onFinishForm = async (values: PayloadCreateCategory) => {
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
      onValuesChange,
    }
  };
};

export default useFormCategoriesState;
