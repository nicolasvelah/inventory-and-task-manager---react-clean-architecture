import { useState } from 'react';
import { UseCreateInventoryState } from './useCreateInventoryState.interfaces';

const useCreatePlaceState: UseCreateInventoryState = () => {
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

export default useCreatePlaceState;
