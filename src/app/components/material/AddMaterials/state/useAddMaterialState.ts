/* eslint-disable no-unused-vars */
import { Material } from '../AddMaterial.interfaces';
import { UseAddMaterialState } from './useAddMaterialState.interface';

const useAddMaterialState: UseAddMaterialState = ({
  categoryMaterials,
  handleLinkedMaterials
}) => {
  const selectSelectedMaterials = () => {
    const selectedMaterials: Material[] = [];
    categoryMaterials.forEach((category) => {
      const materials = category.materials.filter(
        (material) => !!material.selected
      );
      selectedMaterials.push(...materials);
    });
    return selectedMaterials;
  };

  const handleSaveMaterials = () => {
    handleLinkedMaterials(selectSelectedMaterials());
  };

  return {
    categoryMaterials,
    actions: {
      handleSaveMaterials
    }
  };
};

export default useAddMaterialState;
