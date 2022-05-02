/* eslint-disable class-methods-use-this */
import Catalog, { CatalogRequest } from '../../domain/models/catalog';
import CatalogRepository from '../../domain/repositories/catalog-repository';
import { axiosRequest } from '../../utils/axios-util';

export default class CatalogRepositoryImpl implements CatalogRepository {
  async getCatalogs(type?: 'notControlled' | 'controlled'): Promise<Catalog[]> {
    const axios = await axiosRequest();
    let url = 'api/v1/catalogs';
    if (type) {
      url += `?type=${type}`;
    }
    const catalogs = await axios.get<Catalog[]>(url);

    return catalogs.data;
  }

  async createCatalog(payload: CatalogRequest): Promise<Catalog> {
    const axios = await axiosRequest();
    const response = await axios.post<CatalogRequest>(
      'api/v1/catalogs',
      payload
    );

    return response.data as Catalog;
  }
}
