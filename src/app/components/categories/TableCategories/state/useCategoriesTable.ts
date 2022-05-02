/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { CategoryTable } from '../../../../../domain/models/category';
import { useCategoryContext } from '../../../../context/materials/CategoriesContext';
import {
  UseCategoriesTable
} from './useCategoriesTable.interfaces';

const useCategoriesTable: UseCategoriesTable = () => {
  const [data, setData] = useState<CategoryTable[]>([]);

  const { categories } = useCategoryContext();

  useEffect(() => {
    const newData: CategoryTable[] = categories.map((category) => ({
      key: category._id,
      name: category.name,
      description: category.description,
      createdAt: category.createdAt,
    }));
    setData(newData);
  }, [categories]);

  return {
    dataTable: data
  };
};

export default useCategoriesTable;
