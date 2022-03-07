import { useEffect, useState } from 'react';
import {
  CategoryMaterial,
  Material
} from '../../../../../../material/AddMaterials/AddMaterial.interfaces';

const FAKE_DATA: CategoryMaterial[] = [
  {
    category: 'Panel de alarmas',
    brand: 'BOCH B4512',
    materials: [
      {
        serie: 'alarmas_1',
        macAddress: '784778388723432423',
        selected: true
      },
      {
        serie: 'alarmas_2',
        macAddress: '784778388723432423'
      },
      {
        serie: 'alarmas_3',
        macAddress: '784778388723432423',
        selected: true
      },
      {
        serie: 'alarmas_4',
        macAddress: '784778388723432423'
      },
      {
        serie: 'alarmas_5',
        macAddress: '784778388723432423',
        selected: true
      },
      {
        serie: 'alarmas_6',
        macAddress: '784778388723432423'
      }
    ]
  },
  {
    category: 'Cables',
    brand: 'BOCH B4512',
    materials: [
      {
        serie: 'cables_1',
        used: 100,
        forUse: 200
      },
      {
        serie: 'cables_2',
        used: 100,
        forUse: 200,
        selected: true
      }
    ]
  }
];

const useAddMaterialItemState = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [linkedMaterials, setLinkedMaterials] = useState<Material[]>([]);
  const [categoryMaterials, setCategoryMaterials] = useState<
    CategoryMaterial[]
  >([]);

  useEffect(() => {
    setCategoryMaterials(FAKE_DATA);
  }, []);

  const handleCancel = () => {
    setVisibleModal(false);
  };

  const handleOpen = () => {
    setVisibleModal(true);
  };

  const handleLinkedMaterials = (materials: Material[]) => {
    setLinkedMaterials(materials);
  };

  const handleItemClick = (currentList: Material[]) => {
    const newCategoryMaterials = categoryMaterials.map((category) => {
      const newCategory = { ...category };
      newCategory.materials = newCategory.materials.map((material) => {
        let newMaterials = { ...material };

        const materialFound = currentList.find(
          (currentListItem) => currentListItem.serie === material.serie
        );

        if (materialFound) {
          newMaterials = materialFound;
        }

        return newMaterials;
      });

      return newCategory;
    });
    setCategoryMaterials(newCategoryMaterials);

    return newCategoryMaterials;
  };

  const handleLinkedItemClick = (currentList: Material[]) => {
    const newCategoryMaterials = handleItemClick(currentList);
    const selectedMaterials: Material[] = [];
    newCategoryMaterials.forEach((category) => {
      const materials = category.materials.filter(
        (material) => !!material.selected
      );
      selectedMaterials.push(...materials);
    });
    setLinkedMaterials(selectedMaterials);
  };

  return {
    visibleModal,
    linkedMaterials,
    categoryMaterials,
    actions: {
      handleCancel,
      handleOpen,
      handleLinkedMaterials,
      handleItemClick,
      handleLinkedItemClick
    }
  };
};

export default useAddMaterialItemState;
