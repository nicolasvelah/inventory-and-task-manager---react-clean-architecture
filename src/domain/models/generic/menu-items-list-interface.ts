/* eslint-disable semi */
export default interface MenuItemsList {
  name: string;
  subItems?: {
    name: string;
    url: string;
  }[];
  url?: string;
}
