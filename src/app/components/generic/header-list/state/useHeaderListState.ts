import { Moment } from 'moment';
import { useState } from 'react';

import { defaultDateValueString } from '../../../../../helpers/default-date';
import { UseHeaderListState } from './useHeaderListState.interfaces';

const useHeaderListState: UseHeaderListState = (handleChangeFilters) => {
  const [valueDates, setValueDates] = useState<[string, string]>(
    defaultDateValueString
  );
  const [searchText, setSearchText] = useState<string>('');

  const onChangeDates = (
    values: [Moment, Moment],
    formatString: [string, string]
  ) => {
    if (!values) return;
    setValueDates(formatString);
    handleChangeFilters({
      text: searchText,
      rangeDates: {
        from: formatString[0],
        to: formatString[1]
      }
    });
  };

  const onSearchText = (valueSearch: string) => {
    handleChangeFilters({
      text: valueSearch,
      rangeDates: {
        from: valueDates[0],
        to: valueDates[1]
      }
    });
  };

  const onChangeText = (event: any) => {
    setSearchText(event.target.value);
  };

  return {
    valueDates,
    searchText,
    actions: {
      onChangeDates,
      onSearchText,
      onChangeText
    }
  };
};

export default useHeaderListState;
