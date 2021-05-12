/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

enum UserRoles {
  administrator,
  coordinator,
  technical
}
export type userRolesType = keyof typeof UserRoles;
export const USER_ROLES_LIST = Object.values(UserRoles);
export const defaultRole: userRolesType = 'technical';

export default interface User extends Document {
  name: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  password?: string;
  role: userRolesType;
  permissions: string[];
  enabled: boolean;
  coordinator?: User;
  createdAt?: Date;
  updatedAt?: Date;
}
