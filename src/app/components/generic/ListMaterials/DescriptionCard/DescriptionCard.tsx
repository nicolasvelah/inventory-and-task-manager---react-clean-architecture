/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Material } from '../../../material/AddMaterials/AddMaterial.interfaces';

const ITEMS_DESCRIPTION = {
  serie: 'Serie',
  macAddress: 'MacAddress',
  used: 'Usado',
  forUse: 'Por usar',
  total: 'Total'
};

const DescriptionCard: React.FC<{ item: Material }> = ({ item }) => {
  const currentItem: Material & { total?: number } = { ...item };

  if (
    typeof currentItem.forUse === 'number' &&
    typeof currentItem.used === 'number'
  ) {
    currentItem.total = currentItem.used! + currentItem.forUse!;
  }
  const keys = Object.keys(currentItem);
  return (
    <div>
      {keys
        .filter((key) => !!key && key !== 'selected')
        .map((key) => (
          <div key={key}>
            <b>{ITEMS_DESCRIPTION[key as keyof typeof ITEMS_DESCRIPTION]}: </b>
            <span>{` ${currentItem[key as keyof Material]}`}</span>
          </div>
        ))}
    </div>
  );
};

export default DescriptionCard;
