/* eslint-disable no-unused-vars */

import { CatalogItem } from '../../catalog/AddCatalog/AddCatalog.interfaces';

export type HandleItemClickType = (currentList: CatalogItem[]) => void;

export type UseListCatalogState = (catalogs: CatalogItem[]) => {
  currentCatalogs: CatalogItem[];
  actions: {
    handleCatalogClick: (
      catalog: CatalogItem,
      handleItemClick: HandleItemClickType
    ) => void;
    handleInputNumber: (
      catalog: CatalogItem,
      handleItemClick: HandleItemClickType
    ) => (value: number) => void;
  };
};
