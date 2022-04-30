export type UseCreateInventoryState = () => {
  visibleModal: boolean;
  actions: {
    handleCancel: () => void;
    handleOpen: () => void;
  };
};
