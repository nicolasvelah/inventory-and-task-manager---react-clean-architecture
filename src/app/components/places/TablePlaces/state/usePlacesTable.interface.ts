/* eslint-disable no-unused-vars */
import Inventory from '../../../../../domain/models/inventory';
import Place, { placeType } from '../../../../../domain/models/place';
import Point from '../../../../../domain/models/point';

export interface DataPlacesTable {
  key: string;
  name: string;
  coords: Point;
  mainStreet: string;
  addressNumber: string;
  colony: string;
  municipality: string;
  city: string;
  state: string;
  type: placeType;
  IntalledMaterial?: Inventory[] | string[] | null;
  createdAt?: string;
  updatedAt?: string;
  data: Place;
  // eslint-disable-next-line semi
}

export type UsePlacesTable = () => {
  dataTable: DataPlacesTable[];
};
