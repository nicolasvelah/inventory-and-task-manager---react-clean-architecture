import React from 'react';
import { AppstoreOutlined, SnippetsOutlined, TeamOutlined } from '@ant-design/icons';
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
    name: 'Usuarios',
    url: '/users',
    icon: <TeamOutlined />
  },
  {
    name: 'Dispositivos',
    url: '/devices',
    icon: <AppstoreOutlined />
  }
];

export default menuItemsList;
