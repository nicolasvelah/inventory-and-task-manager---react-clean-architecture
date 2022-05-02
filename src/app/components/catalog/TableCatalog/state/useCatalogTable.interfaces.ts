/* eslint-disable no-unused-vars */

import Catalog from '../../../../../domain/models/catalog';

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
  data: Catalog;
}

export type UseCatalogTable = () => {
  actions: {
    handleEdit: (categoryToEdit: Catalog) => void;
    handleDelete: (id: string) => void;
    openModal: () => void;
    closeModal: () => void;
  };
  viewModal: boolean;
  valueToEdit: Catalog | null;
  dataTable: DataCatalogTable[];
};
