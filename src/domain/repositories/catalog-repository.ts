/* eslint-disable no-unused-vars */

import Catalog from '../models/catalog';

/* eslint-disable semi */
export default interface CatalogRepository {
  getCatalogs(): Promise<Catalog[]>;
}
