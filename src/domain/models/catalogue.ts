/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

enum PlaceCatalogueType {
  ATM,
  sucursal,
}
export type placeCatalogueType = keyof typeof PlaceCatalogueType
export const PLACE_CATALOGUE_TYPE_LIST = Object.keys(PlaceCatalogueType);

export default interface Catalogue {
  device: string; // equipo
  brand: string;
  referenceModel: string;
  dataToCollectInterface: Object;
  typePlace: placeCatalogueType;
  createdAt?: Date;
  updatedAt?: Date;
}
