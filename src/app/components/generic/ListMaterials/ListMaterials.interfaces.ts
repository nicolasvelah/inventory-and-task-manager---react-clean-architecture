/* eslint-disable no-unused-vars */
import { Material } from '../../material/AddMaterials/AddMaterial.interfaces';

export interface ListMaterialsProps {
  materials: Material[];
  handleItemClick: (currentList: Material[]) => void;
}
