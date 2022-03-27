/* eslint-disable no-unused-vars */
import Task from '../../../../domain/models/task';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';

interface ReturnUseCatalog {
  actions: {
    handleChangeFilters: (filtersValue: FiltersValue) => void;
  };
}

export type UseCatalog = () => ReturnUseCatalog;
