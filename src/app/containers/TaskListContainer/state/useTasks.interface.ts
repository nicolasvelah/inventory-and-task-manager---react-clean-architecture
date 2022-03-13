/* eslint-disable no-unused-vars */
import Task from '../../../../domain/models/task';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';

interface ReturnUseTasks {
  tasks: Task[];
  actions: {
    handleChangeFilters: (filtersValue: FiltersValue) => void;
  };
}

export type UseTasks = () => ReturnUseTasks;
