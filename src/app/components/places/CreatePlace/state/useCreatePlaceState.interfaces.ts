export type UseCreatePlaceState = () => {
  visibleModal: boolean;
  actions: {
    handleCancel: () => void;
    handleOpen: () => void;
  };
};
