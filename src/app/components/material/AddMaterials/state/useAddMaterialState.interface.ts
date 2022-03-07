import { CategoryMaterial, Material } from '../AddMaterial.interfaces';

/* eslint-disable no-unused-vars */
export type UseAddMaterialState = (values: {
  categoryMaterials: CategoryMaterial[];
  handleLinkedMaterials: (linkedMaterials: Material[]) => void;
}) => {
  actions: {
    handleSaveMaterials: () => void;
  };
};
