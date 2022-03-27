import React from 'react';
import {
  AppstoreOutlined,
  EnvironmentOutlined,
  SnippetsOutlined,
  TeamOutlined
} from '@ant-design/icons';
import MenuItemsList from '../domain/models/generic/menu-items-list-interface';

const menuItemsList: MenuItemsList[] = [
  {
    name: 'Tareas',
    subItems: [
      { name: 'Lista', url: '/task/list' },
      { name: 'Tablero', url: '/task/board' }
    ],
    icon: <SnippetsOutlined />
  },
  {
    name: 'Materiales',
    subItems: [
      { name: 'Catálogo', url: '/materials/catalog' },
      { name: 'Inventario', url: '/materials/inventory' }
    ],
    icon: <SnippetsOutlined />
  },
  {
    name: 'Usuarios',
    url: '/users',
    icon: <TeamOutlined />
  },
  {
    name: 'Dispositivos',
    url: '/devices',
    icon: <AppstoreOutlined />
  },
  {
    name: 'Sitios',
    url: '/places',
    icon: <EnvironmentOutlined />
  }
];

export default menuItemsList;
