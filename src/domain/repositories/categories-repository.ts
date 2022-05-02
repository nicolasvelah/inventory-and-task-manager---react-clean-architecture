import Category from '../models/category';

/* eslint-disable semi */
export default interface CategoriesRepository {
  getCategories(): Promise<Category[]>;
}
