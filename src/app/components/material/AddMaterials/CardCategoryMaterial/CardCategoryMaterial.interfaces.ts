/* eslint-disable no-unused-vars */
import { CategoryMaterial, Material } from '../AddMaterial.interfaces';

export interface CardCategoryMaterialProps {
  category: CategoryMaterial;
  handleItemClick: (currentList: Material[]) => void
}
