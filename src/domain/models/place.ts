/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import Inventory from './inventory';

enum PlaceType {
  ATM,
  sucursal
}
export type placeType = keyof typeof PlaceType;
export const PLACE_TYPE_LIST = Object.keys(PlaceType);

export default interface Place {
  _id: string;
  name: string;
  coords: number[];
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
}

export interface PayloadCreatePlace {
  name: string;
  coords: number[];
  mainStreet: string;
  addressNumber: string;
  colony: string;
  municipality: string;
  city: string;
  state: string;
  type: placeType;
  IntalledMaterial?: Inventory[] | string[] | null;
}
