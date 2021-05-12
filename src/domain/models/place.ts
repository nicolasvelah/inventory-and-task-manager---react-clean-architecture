/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import Point from './point';

enum PlaceType {
  ATM,
  sucursal
}
export type placeType = keyof typeof PlaceType;
export const PLACE_TYPE_LIST = Object.keys(PlaceType);

export default interface Place {
  name: string;
  coords: Point;
  mainStreet: string;
  addressNumber: string;
  colony: string;
  municipality: string;
  city: string;
  state: string;
  type: placeType;
  createdAt?: Date;
  updatedAt?: Date;
}
