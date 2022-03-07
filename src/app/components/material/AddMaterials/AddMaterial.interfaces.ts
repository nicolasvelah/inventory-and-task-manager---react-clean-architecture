/* eslint-disable no-unused-vars */
export interface Material {
  serie: string;
  macAddress?: string;
  used?: number;
  forUse?: number;
  selected?: boolean;
}

export interface CategoryMaterial {
  category: string;
  brand: string;
  materials: Material[];
}

export interface AddMaterialProps {
  categoryMaterials: CategoryMaterial[];
  handleLinkedMaterials: (linkedMaterials: Material[]) => void;
  handleItemClick: (currentList: Material[]) => void;
}
