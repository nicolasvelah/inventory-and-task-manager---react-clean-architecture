/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

enum UserRoles {
  administrator,
  coordinator,
  technical
}

export enum UserRoleTranslateEnum {
  administrator = 'Administrador',
  coordinator = 'Coordinador',
  technical = 'Técnico'
}

export type userRolesType = keyof typeof UserRoles;
export const USER_ROLES_LIST = Object.values(UserRoles).filter(
  (rol) => typeof rol === 'string'
) as userRolesType[];

export const defaultRole: userRolesType = 'technical';

export default interface User {
  _id: string;
  name: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  password?: string;
  role: userRolesType;
  permissions: string[];
  enabled: boolean;
  coordinator?: User;
  createdAt?: string;
  updatedAt?: string;
}
