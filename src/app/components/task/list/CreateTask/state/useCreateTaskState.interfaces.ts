export type UseCreateTaskState = () => {
  visibleModal: boolean;
  actions: {
    handleCancel: () => void;
    handleOpen: () => void;
  };
};
