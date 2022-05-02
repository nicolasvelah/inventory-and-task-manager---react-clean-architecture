import { useState } from 'react';
import { UseCreateInventoryState } from './useCreateInventoryState.interfaces';

const useCreateInventoryState: UseCreateInventoryState = () => {
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

export default useCreateInventoryState;
