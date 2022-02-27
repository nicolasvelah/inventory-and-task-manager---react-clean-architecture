import React, { FunctionComponent, useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import { DatePicker } from 'antd';
import Task from '../../../../domain/models/task';
import DependecyInjection from '../../../../dependecy-injection';
import { userGlobalContext } from '../../../context/global/UserGlobalContext';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

const initMonthDate = moment().startOf('month').format(dateFormat);
const actualDate = moment().format(dateFormat);
const defaultValue: [Moment, Moment] = [
  moment(initMonthDate, dateFormat),
  moment(actualDate, dateFormat)
];

/* const baseItem: Task = {
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
}; */

const RangeDate: FunctionComponent<{
  // eslint-disable-next-line no-unused-vars
  setTasks: (newTasks: Task[], searchTypeArg: 'range' | 'search') => void;
  inUse?: boolean;
}> = ({ setTasks, inUse }) => {
  const [value, setValue] = useState<[Moment, Moment]>(defaultValue);

  const { tasksRepository } = DependecyInjection.getInstance();
  const { user } = userGlobalContext();

  const getData = (start: string, end: string): Promise<Task[]> => {
    return tasksRepository!.getAllByIdUserAndRangeDates(user!._id!, start, end);
  };

  useEffect(() => {
    getData(defaultValue[0].format(dateFormat), defaultValue[1].format(dateFormat)).then(
      (tasks) => {
        setTasks(tasks, 'range');
      }
    );
  }, []);

  useEffect(() => {
    if (!inUse) setValue(defaultValue);
  }, [inUse]);

  /* const onChange = async (values: [Moment, Moment] | null) => {
    if (!values) return;
    getData(values[0].format(dateFormat), values[1].format(dateFormat)).then((tasks) => {
      setTasks(tasks, 'range');
      setValue(values);
    });
  }; */

  return (
    <div>
      <RangePicker
        defaultValue={defaultValue}
        value={value}
        onChange={(values) => {
          if (!values) return;

          getData(values[0]!.format(dateFormat), values[1]!.format(dateFormat)).then((tasks) => {
            setTasks(tasks, 'range');
            setValue(values as [Moment, Moment]);
          });
        }}
      />
    </div>
  );
};

export default RangeDate;
