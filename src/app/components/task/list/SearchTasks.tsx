import React, { FunctionComponent, useEffect, useState } from 'react';
import { Input } from 'antd';
import Task from '../../../../domain/models/task';

const { Search } = Input;

const baseItem: Task = {
  type: 'installation',
  _id: '621449bec341eaa648916b19',
  technical: {
    permissions: [],
    role: 'technical',
    enabled: true,
    _id: '6214416bc341eaa648916b15',
    name: 'technical',
    dateOfBirth: '2022-02-22T01:50:34.874Z',
    lastName: 'Vela',
    phone: '0996011073',
    email: 'technical@gmail.com',
    createdAt: '2022-02-22T01:50:35.033Z',
    updatedAt: '2022-02-22T01:50:35.033Z'
  },
  coordinator: {
    permissions: [],
    role: 'coordinator',
    enabled: true,
    _id: '621441aec341eaa648916b16',
    name: 'coordinator',
    dateOfBirth: '2022-02-22T01:51:42.111Z',
    lastName: 'Vela',
    phone: '0996011073',
    email: 'coordinator@gmails.com',
    createdAt: '2022-02-22T01:51:42.400Z',
    updatedAt: '2022-02-22T01:51:42.400Z'
  },
  place: {
    type: 'ATM',
    _id: '6214495bc341eaa648916b17',
    name: 'Sitio 1 de prueba',
    addressNumber: 'B20',
    city: 'Quito',
    colony: 'Cumbaya',
    coords: {
      coordinates: [-87.653274, 41.936172],
      type: 'Point'
    },
    mainStreet: 'Angel Rojas',
    municipality: 'Tumbaco',
    state: 'active',
    createdAt: '2022-02-22T02:24:27.843Z',
    updatedAt: '2022-02-22T02:24:27.843Z'
  },
  scheduledDate: '2022-02-22T02:26:06.664Z',
  description: 'Esto es una descripción',
  createdAt: '2022-02-22T02:26:06.703Z',
  updatedAt: '2022-02-22T02:26:06.703Z'
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
