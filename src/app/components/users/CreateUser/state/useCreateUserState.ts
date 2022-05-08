import { useState } from 'react';

const useCreateUserState = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleOk = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return {
    visible,
    actions: {
      handleOk,
      handleCancel
    }
  };
};

export default useCreateUserState;
