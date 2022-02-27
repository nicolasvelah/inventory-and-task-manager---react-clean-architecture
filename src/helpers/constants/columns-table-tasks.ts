import { ColumnsType } from 'antd/lib/table';

// eslint-disable-next-line import/prefer-default-export
export const columnsTableTasks: ColumnsType<any> = [
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
