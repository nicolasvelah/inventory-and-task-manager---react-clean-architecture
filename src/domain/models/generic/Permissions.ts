/* eslint-disable semi */
interface UserPermission {
  translate: string;
  menuItems: {
    name: string;
    subItems?: {
      name: string;
    }[];
  }[];
}

export default interface Permissions {
  administrator: UserPermission;
  coordinator: UserPermission;
  technical: UserPermission;
}
