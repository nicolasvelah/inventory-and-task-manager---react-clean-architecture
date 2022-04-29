/* eslint-disable no-unused-vars */
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';

interface ReturnUsePlaces {
  actions: {
    handleChangeFilters: (filtersValue: FiltersValue) => void;
  };
}

export type UsePlaces = () => ReturnUsePlaces;
