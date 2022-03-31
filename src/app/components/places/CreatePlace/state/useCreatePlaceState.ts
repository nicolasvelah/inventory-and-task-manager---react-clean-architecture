import { useState } from 'react';
import { UseCreatePlaceState } from './useCreatePlaceState.interfaces';

const useCreatePlaceState: UseCreatePlaceState = () => {
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
