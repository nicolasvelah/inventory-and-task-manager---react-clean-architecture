/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

import Category from './category';

enum PlaceCatalogueType {
  ATM,
  sucursal
}
export type placeCatalogType = keyof typeof PlaceCatalogueType;
export const PLACE_CATALOGUE_TYPE_LIST = Object.keys(PlaceCatalogueType);

enum StateCatalogType {
  stock,
  empty
}
export type stateCatalogType = keyof typeof StateCatalogType;
export const STATE_CATALOG_TYPE_LIST = Object.keys(StateCatalogType);

enum TypeCatalogType {
  controlled,
  notControlled
}

export enum TypeSpanishCatalogEnum {
  controlled = 'Controlado',
  notControlled = 'No controlado'
}

export type typeCatalogType = keyof typeof TypeCatalogType;
export const TYPE_CATALOG_TYPE_LIST = Object.keys(TypeCatalogType);

export default interface Catalog {
  _id: string;
  device: string; // nombe
  brand: string;
  referenceModel: string;
  typePlace: placeCatalogType;
  unitOfMeasurement?: string;
  state?: stateCatalogType;
  type?: typeCatalogType;
  createdAt?: string;
  updatedAt?: string;
  categoryId: Category;
}

export interface CatalogRequest {
  brand: string;
  device: string; // nombre
  referenceModel: string;
  typePlace: placeCatalogType;
  unitOfMeasurement?: string;
  type: typeCatalogType;
  categoryId: Category;
}
