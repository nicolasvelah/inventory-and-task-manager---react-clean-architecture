/* eslint-disable no-unused-vars */
import { CatalogItem } from '../catalog/AddCatalog/AddCatalog.interfaces';

export interface ListCatalogProps {
  catalogs: CatalogItem[];
  handleItemClick: (item: CatalogItem[]) => void;
  showNumberOfItems?: boolean;
}
