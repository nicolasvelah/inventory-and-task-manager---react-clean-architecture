/* eslint-disable no-unused-vars */

import { CatalogItem } from '../../catalog/AddCatalog/AddCatalog.interfaces';

export type UseListCatalogState = (catalogs: CatalogItem[]) => {
  currentCatalogs: CatalogItem[];
  actions: {
    handleCatalogClick: (
      catalog: CatalogItem,
      handleItemClick: (currentList: CatalogItem[]) => void
    ) => void;
  };
};
