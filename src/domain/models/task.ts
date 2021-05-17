/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import User from './user';
import Place from './place';
import Point from './point';

export enum TaskType {
  installation = 'Instalación',
  service= 'Servicio',
  maintenance = 'Mantenimiento',
}
export type taskType = keyof typeof TaskType;
export const TASK_TYPE_LIST = Object.keys(TaskType);

export default interface Task {
  _id: string;
  technical: User;
  place: Place;
  scheduledDate: string;
  arrivalDate?: string;
  arrivalLatLong?: Point;
  arrivalPhoto?: string;
  closedDate?: string;
  closedLatLong?: Point;
  closedPhoto?: string;
  type: taskType;
  createdAt?: string;
  updatedAt?: string;
}
