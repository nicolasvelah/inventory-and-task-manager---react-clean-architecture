/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { inventoryStateType } from '../../domain/models/inventory';

export const INVENTORY_STATE_COLOR_AND_NAME: {
  [key in inventoryStateType]: {
    color: 'magenta' | 'red' | 'volcano' | 'orange' | 'green';
    name: string;
  };
} = {
  damaged: {
    color: 'red',
    name: 'Dañado'
  },
  free: {
    color: 'orange',
    name: 'Libre'
  },

  installed: {
    color: 'green',
    name: 'Dañado'
  },

  onManteince: {
    color: 'red',
    name: 'En mantenimiento'
  },
  unInstalled: {
    color: 'red',
    name: 'Desinstalado'
  }
};
