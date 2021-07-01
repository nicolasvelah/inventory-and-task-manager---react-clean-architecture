import MenuItemsList from '../domain/models/generic/menu-items-list-interface';

const menuItemsList: MenuItemsList[] = [
  {
    name: 'Tareas',
    subItems: [
      { name: 'Lista', url: '/task/list' },
      { name: 'Tablero', url: '/task/board' }
    ]
  },
  {
    name: 'Usuarios',
    url: '/users'
  },
  {
    name: 'Dispositivos',
    url: '/devices'
  }
];

export default menuItemsList;