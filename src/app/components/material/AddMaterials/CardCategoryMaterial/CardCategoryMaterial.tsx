import { Card } from 'antd';
import React from 'react';
import { CardCategoryMaterialProps } from './CardCategoryMaterial.interfaces';
import ListMaterials from '../../../generic/ListMaterials/ListMaterials';
import './card-category-material.scss';

const CardCategoryMaterial: React.FC<CardCategoryMaterialProps> = ({
  category,
  handleItemClick
}) => {
  const renderTitle = (values: { category: string; brand: string }) => {
    return (
      <div className="card-category-title">
        <h2>{values.category}</h2>
        <span>{values.brand}</span>
      </div>
    );
  };

  return (
    <Card
      className="card-category"
      title={renderTitle({
        category: category.category,
        brand: category.brand
      })}
    >
      <ListMaterials
        materials={category.materials}
        handleItemClick={handleItemClick}
      />
    </Card>
  );
};

export default CardCategoryMaterial;
