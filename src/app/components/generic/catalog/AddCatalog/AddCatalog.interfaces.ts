/* eslint-disable no-unused-vars */

import Catalog from '../../../../../domain/models/catalog';

export interface CatalogItem extends Catalog {
  selected?: boolean;
}

export interface AddCatalogProps {
  catalogs: CatalogItem[];
  linkedCatalogs: CatalogItem[]
  handleLinkedCatalogs: (linkedCatalogs: CatalogItem[]) => void;
}
