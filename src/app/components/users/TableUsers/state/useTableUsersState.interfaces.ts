import { userRolesType } from '../../../../../domain/models/user';

export interface DataUser {
  key: string;
  name: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  role: userRolesType;
  enabled: string;
  createdAt: string;
}

export interface FormUserInterface {
  id: string;
  name: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  enabled: boolean;
  role: userRolesType;
  idCoordinator?: string;
}
