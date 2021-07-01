/* eslint-disable semi */
import { userRolesType } from '../user';

export default interface FormUserInterface {
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
