import { useState } from 'react';
import { UseCreateTaskState } from './useCreateTaskState.interfaces';

const useCreateTaskState: UseCreateTaskState = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const handleCancel = () => {
    setVisibleModal(false);
  };

  const handleOpen = () => {
    setVisibleModal(true);
  };
  return {
    visibleModal,
    actions: {
      handleCancel,
      handleOpen
    }
  };
};

export default useCreateTaskState;
