/* eslint-disable indent */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../dependecy-injection';
import Category, { CategoryTable } from '../../../../../domain/models/category';
import { useCategoryContext } from '../../../../context/materials/CategoriesContext';
import { UseCategoriesTable } from './useCategoriesTable.interfaces';

const useCategoriesTable: UseCategoriesTable = () => {
  const [data, setData] = useState<CategoryTable[]>([]);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [valueToEdit, setValueToEdit] = useState<Category | null>(null);

  const { categories, setCategory } = useCategoryContext();

  const { categoriesRepository } = repository;

  useEffect(() => {
    const newData: CategoryTable[] = categories.map((category) => ({
      key: category._id,
      name: category.name,
      description: category.description,
      createdAt: category.createdAt,
      data: category
    }));
    setData(newData);
  }, [categories]);

  const handleEdit = (categoryToEdit: Category) => {
    setValueToEdit(categoryToEdit);
    setViewModal(true);
  };

  const handleDelete = (id: string) => {
    const hide = message.loading('Eliminando categoría');
    categoriesRepository
      ?.delete(id)
      .then((deleted) => {
        if (deleted) {
          const newCategories = categories.filter((item) => item._id !== id);
          setCategory(newCategories);
        }
      })
      .finally(() => {
        hide();
      });
  };

  const openModal = () => setViewModal(true);
  const closeModal = () => setViewModal(false);

  return {
    actions: {
      handleEdit,
      handleDelete,
      openModal,
      closeModal
    },
    viewModal,
    valueToEdit,
    dataTable: data
  };
};

export default useCategoriesTable;
