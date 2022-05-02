/* eslint-disable indent */
import { useEffect, useState } from 'react';
import Category, { CategoryTable } from '../../../../../domain/models/category';
import { useCategoryContext } from '../../../../context/materials/CategoriesContext';
import { UseCategoriesTable } from './useCategoriesTable.interfaces';

const useCategoriesTable: UseCategoriesTable = () => {
  const [data, setData] = useState<CategoryTable[]>([]);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [valueToEdit, setValueToEdit] = useState<Category | null>(null);

  const { categories } = useCategoryContext();

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
    console.log('categoryToEdit -->', categoryToEdit);
    setValueToEdit(categoryToEdit);
    setViewModal(true);
  };

  const openModal = () => setViewModal(true);
  const closeModal = () => setViewModal(false);

  return {
    actions: {
      handleEdit,
      openModal,
      closeModal
    },
    viewModal,
    valueToEdit,
    dataTable: data
  };
};

export default useCategoriesTable;
