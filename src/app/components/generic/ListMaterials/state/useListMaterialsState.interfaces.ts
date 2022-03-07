/* eslint-disable no-unused-vars */
import { Material } from '../../../material/AddMaterials/AddMaterial.interfaces';

export type UseListMaterialsState = (materials: Material[]) => {
  currentMaterials: Material[];
  actions: {
    handleMaterialClick: (
      material: Material,
      handleItemClick: (currentList: Material[]) => void
    ) => void;
  };
};
