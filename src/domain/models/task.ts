/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import User from './user';
import Place from './place';
import Point from './point';

export enum TaskType {
  installation = 'Instalación',
  service = 'Servicio',
  maintenance = 'Mantenimiento'
}
export type taskType = keyof typeof TaskType;
export const TASK_TYPE_LIST = Object.keys(TaskType);
export const TASK_TYPE_LIST_VALUES = Object.keys(TaskType).map(
  (item) => TaskType[item as taskType]
);

export default interface Task {
  _id: string;
  technical: User;
  coordinator: User;
  place: Place;
  scheduledDate: string;
  arrivalDate?: string;
  arrivalLatLong?: Point;
  arrivalPhoto?: string;
  closedDate?: string;
  closedLatLong?: Point;
  closedPhoto?: string;
  certificatePhoto?: string;
  emnployeePhoto?: string;
  type: taskType;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}
