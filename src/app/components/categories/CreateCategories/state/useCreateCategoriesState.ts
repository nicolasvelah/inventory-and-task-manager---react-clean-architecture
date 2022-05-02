import { useState } from 'react';

const useCatalogTaskState = () => {
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

export default useCatalogTaskState;
