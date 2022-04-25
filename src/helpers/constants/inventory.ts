/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { stateCatalogType } from '../../domain/models/catalog';
import { inventoryStateType } from '../../domain/models/inventory';

type InventoryColorAndName = {
  [K in inventoryStateType]: {
    color: 'magenta' | 'red' | 'volcano' | 'orange' | 'green';
    name: string;
  };
};

type BoxColorAndName = {
  [K in stateCatalogType]: {
    color: 'orange' | 'green';
    name: string;
  };
};

export const INVENTORY_STATE_COLOR_AND_NAME: InventoryColorAndName = {
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

export const BOX_STATE_COLOR_AND_NAME: BoxColorAndName = {
  empty: {
    color: 'orange',
    name: 'Vacío'
  },
  stock: {
    color: 'green',
    name: 'En Stock'
  }
};
