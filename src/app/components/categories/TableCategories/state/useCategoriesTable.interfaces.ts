import { CategoryTable } from '../../../../../domain/models/category';

export type UseCategoriesTable = () => {
  dataTable: CategoryTable[];
};
