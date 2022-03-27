import User from '../../../../domain/models/user';
import { FormUserInterface } from '../TableUsers/state/useTableUsersState.interfaces';

export interface FormUserProps {
  // eslint-disable-next-line no-unused-vars
  handleOk: (user: User) => void;
  initValues?: FormUserInterface;
}
