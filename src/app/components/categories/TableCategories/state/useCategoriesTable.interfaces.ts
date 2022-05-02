/* eslint-disable no-unused-vars */
import Category, { CategoryTable } from '../../../../../domain/models/category';

export type UseCategoriesTable = () => {
  actions: {
    handleEdit: (categoryToEdit: Category) => void;
    openModal: () => void;
    closeModal: () => void;
  };
  viewModal: boolean;
  valueToEdit: Category | null;
  dataTable: CategoryTable[];
};
