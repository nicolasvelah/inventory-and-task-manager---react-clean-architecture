/* eslint-disable no-unused-vars */
import { Moment } from 'moment';
import Place from '../../../../../../../domain/models/place';
import User from '../../../../../../../domain/models/user';

export type UseFormTaskState = () => {
  placesFiltered: Place[];
  technicalsFiltered: User[];
  coordinatorsFiltered: User[];
  actions: {
    onFinishForm: (values: any) => Promise<void>;
    onSearchPlaces: (value: string) => void;
    onSearchTechnicals: (value: string) => void;
    onSearchCoordinators: (value: string) => void;
  };
};

export interface ValuesFormTask {
  idPlace: string;
  idCoordinator: string;
  idTechnical: string;
  type: string;
  scheduledDate: Moment;
  description: string;
}
