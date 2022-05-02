export type UseCreateBoxState = () => {
  visibleModal: boolean;
  actions: {
    handleCancel: () => void;
    handleOpen: () => void;
  };
};
