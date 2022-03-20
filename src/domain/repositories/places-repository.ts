/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import Place from '../models/place';

export default interface PlacesRepository {
  getPlaces(): Promise<Place[]>;
}
