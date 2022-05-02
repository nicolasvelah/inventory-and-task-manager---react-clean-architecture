/* eslint-disable class-methods-use-this */
import Category from '../../domain/models/category';
import CategoriesRepository from '../../domain/repositories/categories-repository';
import { axiosRequest } from '../../utils/axios-util';

export default class CategoriesRepositoryImpl implements CategoriesRepository {
  async getCategories(): Promise<Category[]> {
    const axios = await axiosRequest();
    const catalogs = await axios.get<Category[]>('api/v1/categories/');

    return catalogs.data;
  }
}
