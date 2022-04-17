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
        name: 'Catálogo',
        url: '/materials/catalog',
        key: KeysItemsMenuEnum.CATALOG,
        active: false
      },
      {
        name: 'Dispositivos no controlados',
        url: '/materials/uncontrolled-inventory',
        key: KeysItemsMenuEnum.UNCONTROLLED,
        active: false
      },
      {
        name: 'Dispositivos controlados',
        url: '/materials/controlled-nventory',
        key: KeysItemsMenuEnum.CONTROLLED,
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
