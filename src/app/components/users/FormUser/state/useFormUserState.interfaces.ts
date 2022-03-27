import { Moment } from 'moment';
import { FormUserProps } from '../FormUser.interfaces';

/* eslint-disable no-unused-vars */
export type UseFormUserState = (args: FormUserProps) => {
  actions: {
    disabledDate: (current: Moment) => boolean;
    onFinish: (values: any) => Promise<void>;
  };
};
