/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

enum PlaceCatalogueType {
  ATM,
  sucursal,
}
export type placeCatalogType = keyof typeof PlaceCatalogueType
export const PLACE_CATALOGUE_TYPE_LIST = Object.keys(PlaceCatalogueType);

enum StateCatalogType {
  stock,
  empty,
}
export type stateCatalogType = keyof typeof StateCatalogType
export const STATE_CATALOG_TYPE_LIST = Object.keys(StateCatalogType);

enum TypeCatalogType {
  controlled,
  notControlled,
}
export type typeCatalogType = keyof typeof TypeCatalogType
export const TYPE_CATALOG_TYPE_LIST = Object.keys(TypeCatalogType);

export default interface Catalog {
  _id: string;
  device: string; // equipo
  brand: string;
  referenceModel: string;
  typePlace: placeCatalogType;
  unitOfMeasurement?: string;
  state?: stateCatalogType;
  type?: typeCatalogType;
  createdAt?: string;
  updatedAt?: string;
}
