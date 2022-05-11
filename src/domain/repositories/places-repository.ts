/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import Place, { PayloadCreatePlace } from '../models/place';

export default interface PlacesRepository {
  createPlace(payload: PayloadCreatePlace): Promise<Place>;
  getPlaces(): Promise<Place[]>;
  delete(id: string): Promise<boolean>;
  update(id: string, data: Partial<Place>): Promise<Place>;
}
