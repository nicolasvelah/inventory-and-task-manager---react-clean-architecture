/* eslint-disable no-unused-vars */

import Catalog, { CatalogRequest } from '../models/catalog';

/* eslint-disable semi */
export default interface CatalogRepository {
  getCatalogs(): Promise<Catalog[]>;
  createCatalog(payload:CatalogRequest): Promise<Catalog>;
}
