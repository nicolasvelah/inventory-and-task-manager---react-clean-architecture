import MenuItemsList from '../domain/models/generic/menu-items-list-interface';

const menuItemsList: MenuItemsList[] = [
  {
    name: 'Tareas',
    subItems: [
      { name: 'Lista', url: '/task/list' },
      { name: 'Tablero', url: '/task/table' }
    ]
  },
  {
    name: 'Dispositivos',
    url: '/devices'
  }
];

export default menuItemsList;
