/* eslint-disable object-curly-newline */
import React from 'react';
import {
  AppstoreOutlined,
  EnvironmentOutlined,
  SnippetsOutlined,
  TeamOutlined
} from '@ant-design/icons';
import MenuItem from '../domain/models/generic/menu-items-list-interface';
import { KeysItemsMenuEnum } from '../helpers/enums/menu-layout-enum';

const menuItemsList: MenuItem[] = [
  {
    name: 'Tareas',
    key: KeysItemsMenuEnum.TASK,
    active: true,
    subItems: [
      {
        name: 'Lista',
        url: '/task/list',
        key: KeysItemsMenuEnum.TASK_LIST,
        active: false
      }
    ],
    icon: <SnippetsOutlined />
  },
  {
    name: 'Materiales',
    key: KeysItemsMenuEnum.MATERIAL,
    active: false,
    subItems: [
      {
        name: 'Categorias',
        url: '/materials/categories',
        key: KeysItemsMenuEnum.CATEGORIES,
        active: false
      },
      {
        name: 'Catálogo',
        url: '/materials/catalog',
        key: KeysItemsMenuEnum.CATALOG,
        active: false
      },
      {
        name: 'Inventario',
        url: '/materials/inventory',
        key: KeysItemsMenuEnum.INVENTORY,
        active: false
      },
      {
        name: 'Cajas',
        url: '/materials/box',
        key: KeysItemsMenuEnum.BOX,
        active: false
      }
    ],
    icon: <AppstoreOutlined />
  },
  {
    name: 'Usuarios',
    url: '/users',
    key: KeysItemsMenuEnum.USERS,
    active: false,
    icon: <TeamOutlined />
  },
  {
    name: 'Sitios',
    url: '/places',
    key: KeysItemsMenuEnum.PLACES,
    active: false,
    icon: <EnvironmentOutlined />
  }
];

export default menuItemsList;
