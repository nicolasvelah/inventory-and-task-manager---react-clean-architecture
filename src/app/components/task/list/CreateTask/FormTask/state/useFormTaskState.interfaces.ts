/* eslint-disable no-unused-vars */
import { Moment } from 'moment';
import Place from '../../../../../../../domain/models/place';
import Task from '../../../../../../../domain/models/task';
import User from '../../../../../../../domain/models/user';
import { CatalogItem } from '../../../../../generic/catalog/AddCatalog/AddCatalog.interfaces';

export type UseFormTaskState = (initValues?: Task) => {
  placesFiltered: Place[];
  technicalsFiltered: User[];
  coordinatorsFiltered: User[];
  disabledAddCategoryButton: boolean;
  actions: {
    handleCatalogSelected: (catalogs: CatalogItem[]) => void;
    onFinishForm: (values: any) => Promise<void>;
    onSearchPlaces: (value: string) => void;
    onSearchTechnicals: (value: string) => void;
    onSearchCoordinators: (value: string) => void;
    onValuesChange: (value: { [k: string]: any }) => void;
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
