import React, { FunctionComponent, useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import { DatePicker } from 'antd';
import Task from '../../../../domain/models/task';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

const initMonthDate = moment().startOf('month').format(dateFormat);
const actualDate = moment().format(dateFormat);
const defaultValue: [Moment, Moment] = [
  moment(initMonthDate, dateFormat),
  moment(actualDate, dateFormat)
];

const baseItem: Task = {
  _id: '1234',
  arrivalDate: new Date(),
  arrivalLatLong: {
    type: 'Point',
    coordinates: [0, 0]
  },
  arrivalPhoto: '',
  closedDate: new Date(),
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
  scheduledDate: new Date(),
  technical: {
    dateOfBirth: new Date(),
    email: '',
    enabled: true,
    lastName: 'Ramirez',
    name: 'Tecnico',
    permissions: [],
    phone: '',
    role: 'technical',
    coordinator: {
      dateOfBirth: new Date(),
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

const RangeDate: FunctionComponent<{
  // eslint-disable-next-line no-unused-vars
  setTasks: (newTasks: Task[], searchTypeArg: 'range' | 'search') => void;
  inUse?: boolean;
}> = ({ setTasks, inUse }) => {
  const [value, setValue] = useState<[Moment, Moment]>(defaultValue);

  useEffect(() => {
    if (!inUse) setValue(defaultValue);
  }, [inUse]);

  const onChange = (values: [Moment, Moment]) => {
    console.log('values -->', values);

    setTasks([baseItem, { ...baseItem, _id: '123445' }], 'range');
    setValue(values);
  };

  return (
    <div>
      <RangePicker defaultValue={defaultValue} value={value} onChange={onChange} />
    </div>
  );
};

export default RangeDate;
