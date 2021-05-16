/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import User from './user';
import Place from './place';
import Point from './point';

enum TaskType {
  installation,
  service,
  maintenance
}
export type taskType = keyof typeof TaskType;
export const TASK_TYPE_LIST = Object.keys(TaskType);

export default interface Task {
  _id: string;
  technical: User;
  place: Place;
  scheduledDate: Date;
  arrivalDate?: Date;
  arrivalLatLong?: Point;
  arrivalPhoto?: string;
  closedDate?: Date;
  closedLatLong?: Point;
  closedPhoto?: string;
  type: taskType;
  createdAt?: Date;
  updatedAt?: Date;
}
