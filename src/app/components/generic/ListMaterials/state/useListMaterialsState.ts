import { useEffect, useState } from 'react';
import { Material } from '../../../material/AddMaterials/AddMaterial.interfaces';
import { UseListMaterialsState } from './useListMaterialsState.interfaces';

const useListMaterialsState: UseListMaterialsState = (materials) => {
  const [currentMaterials, setCurrentMaterials] = useState<Material[]>([]);

  useEffect(() => {
    setCurrentMaterials(materials);
  }, [materials]);

  const handleMaterialClick = (
    material: Material,
    // eslint-disable-next-line no-unused-vars
    handleItemClick: (currentList: Material[]) => void
  ) => {
    const newMaterials = currentMaterials.map((item) => {
      const newItem = { ...item };
      if (item.serie === material.serie) {
        newItem.selected = !newItem.selected;
      }

      return newItem;
    });
    setCurrentMaterials(newMaterials);
    handleItemClick(newMaterials);
  };

  return {
    currentMaterials,
    actions: {
      handleMaterialClick
    }
  };
};
export default useListMaterialsState;
