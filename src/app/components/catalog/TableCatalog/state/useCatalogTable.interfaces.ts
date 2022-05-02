/* eslint-disable no-unused-vars */

export interface DataCatalogTable {
  key: string;
  device: string;
  brand: string;
  model: string;
  interface: string;
  placeType: string;
  type: string;
  unity: string;
  category: string;
  categoryDescription: string;
  createdAt: string;
  updatedAt: string;
}

export type UseCatalogTable = () => {
  dataTable: DataCatalogTable[];
};
