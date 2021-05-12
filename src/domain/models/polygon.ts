/* eslint-disable semi */
/**
const colorado = {
  type: 'Polygon',
  coordinates: [
    [
      [-109, 41],
      [-102, 41],
      [-102, 37],
      [-109, 37],
      [-109, 41]
    ]
  ]
};
 */
export default interface Polygon {
  type: 'Polygon';
  coordinates: number[][][];
}
