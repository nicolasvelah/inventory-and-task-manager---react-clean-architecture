import Permissions from '../domain/models/generic/Permissions';

const permissions: Permissions = {
  administrator: {
    translate: 'Administrador',
    menuItems: [
      {
        name: 'Tareas',
        subItems: [{ name: 'Lista' }, { name: 'Tablero' }]
      }
    ]
  },
  coordinator: {
    translate: 'Coordinador',
    menuItems: [
      {
        name: 'Tareas',
        subItems: [{ name: 'Lista' }, { name: 'Tablero' }]
      },
      {
        name: 'Dispositivos'
      }
    ]
  },
  technical: {
    translate: 'Técnico',
    menuItems: []
  }
};

export default permissions;
