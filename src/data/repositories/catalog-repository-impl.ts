/* eslint-disable class-methods-use-this */
import Catalog from '../../domain/models/catalog';
import CatalogRepository from '../../domain/repositories/catalog-repository';
import { axiosRequest } from '../../utils/axios-util';

export default class CatalogRepositoryImpl implements CatalogRepository {
  async getCatalogs(): Promise<Catalog[]> {
    const axios = await axiosRequest();
    const catalogs = await axios.get<Catalog[]>('api/v1/catalogs');

    return catalogs.data;
  }
}
