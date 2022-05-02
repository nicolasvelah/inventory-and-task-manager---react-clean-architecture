/* eslint-disable no-unused-vars */

import Catalog, { CatalogRequest } from '../models/catalog';

/* eslint-disable semi */
export default interface CatalogRepository {
  getCatalogs(type?: 'notControlled' | 'controlled'): Promise<Catalog[]>;
  createCatalog(payload: CatalogRequest): Promise<Catalog>;
  delete(id: string): Promise<boolean>;
  delete(id: string): Promise<boolean>;

  update(id: string, data: Partial<Catalog>): Promise<Catalog>;
}
