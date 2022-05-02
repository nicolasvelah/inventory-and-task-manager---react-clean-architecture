/* eslint-disable no-unused-vars */
import Category, { PayloadCreateCategory } from '../models/category';

/* eslint-disable semi */
export default interface CategoriesRepository {
  getCategories(): Promise<Category[]>;
  create(payload: PayloadCreateCategory): Promise<Category>;
  update(id: string, data: Partial<Category>): Promise<Category>;
  delete(id: string): Promise<boolean>;
}
