import Permissions from '../domain/models/generic/Permissions';

const permissions: Permissions = {
  administrator: {
    translate: 'Administrador',
    menuItems: [
      {
        name: 'Tareas',
        subItems: [{ name: 'Lista' }, { name: 'Tablero' }]
      },
      {
        name: 'Materiales',
        subItems: [{ name: 'Catálogo' }, { name: 'Inventario' }]
      },
      {
        name: 'Usuarios'
      },
      {
        name: 'Dispositivos'
      },
      {
        name: 'Sitios'
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
