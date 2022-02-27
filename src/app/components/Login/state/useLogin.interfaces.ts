/* eslint-disable no-unused-vars */
interface UseLoginReturn {
  actions: {
    onFinish: (values: { password: string; remember: boolean; username: string }) => Promise<void>;
  };
  loading: boolean;
}

export type UseLogin = () => UseLoginReturn;
