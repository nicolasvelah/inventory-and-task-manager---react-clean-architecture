/* eslint-disable no-unused-vars */
import { Moment } from 'moment';
import { ChangeEventHandler } from 'react';
import { FiltersValue } from '../HeaderList.interfaces';

export type UseHeaderListState = (
  handleChangeFilters: (filtersValue: FiltersValue) => void
) => {
  valueDates: [string, string];
  searchText: string;
  actions: {
    onChangeDates: (
      values: [Moment, Moment],
      formatString: [string, string]
    ) => void;
    onSearchText: (valueSearch: string) => void;
    onChangeText: ChangeEventHandler<HTMLInputElement>;
  };
};
