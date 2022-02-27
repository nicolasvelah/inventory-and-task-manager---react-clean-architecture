import React, { FunctionComponent, useEffect, useState } from 'react';
import { Input } from 'antd';
import Task from '../../../../domain/models/task';

const { Search } = Input;

const baseItem: Task = {
  _id: '1234',
  arrivalDate: new Date().toString(),
  arrivalLatLong: {
    type: 'Point',
    coordinates: [0, 0]
  },
  arrivalPhoto: '',
  closedDate: new Date().toString(),
  closedLatLong: {
    type: 'Point',
    coordinates: [0, 0]
  },
  closedPhoto: '',
  place: {
    addressNumber: 'Caupicho, 123',
    city: 'Quito',
    colony: '',
    coords: {
      type: 'Point',
      coordinates: [0, 0]
    },
    mainStreet: '',
    municipality: '',
    name: 'place',
    state: '',
    type: 'ATM'
  },
  scheduledDate: new Date().toString(),
  technical: {
    dateOfBirth: new Date().toString(),
    email: '',
    enabled: true,
    lastName: 'Ramirez',
    name: 'Tecnico',
    permissions: [],
    phone: '',
    role: 'technical',
    coordinator: {
      dateOfBirth: new Date().toString(),
      email: '',
      enabled: true,
      lastName: 'Perez',
      name: 'Coodinador',
      permissions: [],
      phone: '',
      role: 'coordinator'
    }
  },
  type: 'installation'
};

const SearchTasks: FunctionComponent<{
  // eslint-disable-next-line no-unused-vars
  setTasks: (newTasks: Task[], searchTypeArg: 'range' | 'search') => void;
  inUse?: boolean;
}> = ({ setTasks, inUse }) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (!inUse) setValue('');
  }, [inUse]);

  const onSearch = (valueSearch: string) => {
    console.log('values -->', valueSearch);
    setTasks([baseItem], 'search');
  };

  const onChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Search
        placeholder="Buscar tarea"
        onSearch={onSearch}
        value={value}
        onChange={onChange}
        enterButton
      />
    </div>
  );
};

export default SearchTasks;
