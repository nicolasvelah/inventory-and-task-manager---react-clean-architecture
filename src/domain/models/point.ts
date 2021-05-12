/* eslint-disable semi */
/**
{
  "type" : "Point",
  "coordinates" : [-122.5 , 37.7 ] ,/// [lng,lat]
}
 */
export default interface Point {
  type: 'Point';
  coordinates: number[];
}
