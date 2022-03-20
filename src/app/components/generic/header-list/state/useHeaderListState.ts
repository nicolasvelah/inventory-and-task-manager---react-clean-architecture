import { Moment } from 'moment';
import { useState } from 'react';

import { defaultDateValueString } from '../../../../../helpers/default-date';
import { FiltersValue } from '../HeaderList.interfaces';
import { UseHeaderListState } from './useHeaderListState.interfaces';

const useHeaderListState: UseHeaderListState = ({
  handleChangeFilters,
  showRangePicker,
  showSearch
}) => {
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

    const payload: FiltersValue = {};

    if (showSearch) {
      payload.text = searchText;
    }

    if (showRangePicker) {
      payload.rangeDates = {
        from: formatString[0],
        to: formatString[1]
      };
    }
    handleChangeFilters(payload);
  };

  const onSearchText = (valueSearch: string) => {
    const payload: FiltersValue = {};

    if (showSearch) {
      payload.text = valueSearch;
    }

    if (showRangePicker) {
      payload.rangeDates = {
        from: valueDates[0],
        to: valueDates[1]
      };
    }

    handleChangeFilters(payload);
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
