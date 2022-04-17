/* eslint-disable no-unused-vars */
import Task from '../../../../domain/models/task';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';

interface ReturnUseTasks {
  visibleDrawer: boolean;
  taskSelected: Task | null;
  actions: {
    handleChangeFilters: (filtersValue: FiltersValue) => void;
    onCloseDrawer: () => void;
  };
}

export type UseTasks = () => ReturnUseTasks;
