import { AddCatalogProps, CatalogItem } from '../AddCatalog.interfaces';

/* eslint-disable no-unused-vars */
export type UseAddCatalogState = (values: AddCatalogProps) => {
  catalogsMenu: CatalogItem[];
  actions: {
    handleSaveCatalogs: () => void;
    handleCurrentCatalogsMenu: (selected: CatalogItem[]) => void;
  };
};
