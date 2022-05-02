/* eslint-disable no-unused-vars */

export type UseFormPlaceState = () => {
  onFinishForm: (values: ValuesFormPlace, lat:number, lng:number) => Promise<void>; };

export interface ValuesFormPlace {
  name: string;
  typePlace: 'ATM' | 'sucursal';
  municipality: string;
  mainStreet: string;
  lng: number;
  lat: number,
  colony: string;
  city: string;
  addressNumber: string;
}
