/* eslint-disable no-underscore-dangle */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import { ColumnsType } from 'antd/lib/table';
import Task from '../../../../domain/models/task';

interface DataTask {
  key: string;
  coordinator: string;
  technical: string;
  address: string;
  scheduledDate: string;
  arrivalDate: string;
  closedDate: string;
}

const formatDate = 'DD/MM/YYYY HH:mm:ss';

function momentFormat(date: string) {
  return moment.utc(date).format(formatDate);
}

const TableTasks: FunctionComponent<{ tasks: Task[] }> = ({ tasks }) => {
  const [data, setData] = useState<DataTask[]>([]);

  useEffect(() => {
    const newData: DataTask[] = tasks.map((task) => ({
      key: task._id,
      coordinator: `${task.technical.coordinator?.name} ${task.technical.coordinator?.lastName}`,
      technical: `${task.technical.name} ${task.technical.lastName}`,
      address: `${task.place.city} ${task.place.addressNumber}`,
      scheduledDate: task.scheduledDate ? momentFormat(task.scheduledDate) : '',
      arrivalDate: task.arrivalDate ? momentFormat(task.arrivalDate) : '',
      closedDate: task.closedDate ? momentFormat(task.closedDate) : ''
    }));
    setData(newData);
  }, [tasks]);

  const columns: ColumnsType<any> = [
    {
      title: 'Id',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: 'Coordinador',
      dataIndex: 'coordinator',
      key: 'coordinator'
    },
    {
      title: 'Técnico',
      dataIndex: 'technical',
      key: 'technical'
    },
    {
      title: 'Sitio',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Fecha programada',
      dataIndex: 'scheduledDate',
      key: 'scheduledDate'
    },
    {
      title: 'Fecha de arribo',
      dataIndex: 'arrivalDate',
      key: 'arrivalDate'
    },
    {
      title: 'Fecha de cierre',
      dataIndex: 'closedDate',
      key: 'closedDate'
    }
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: 1100 }} />
    </div>
  );
};

export default TableTasks;