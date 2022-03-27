import React from 'react';
import { Space, DatePicker, Input } from 'antd';
import moment, { Moment } from 'moment';
import { HeaderListProps } from './HeaderList.interfaces';
import useHeaderListState from './state/useHeaderListState';
import { FORMAT_DATE_DAY_MONTH_YEAR_TWO } from '../../../../helpers/constants/format-date';
import { defaultDateValue } from '../../../../helpers/default-date';

const { RangePicker } = DatePicker;
const { Search } = Input;

const HeaderList: React.FC<HeaderListProps> = ({
  placeHolder = 'Buscar',
  handleChangeFilters,
  showSearch = true,
  showRangePicker = true
}) => {
  const {
    valueDates,
    searchText,
    actions: { onChangeDates, onSearchText, onChangeText }
  } = useHeaderListState({ handleChangeFilters, showSearch, showRangePicker });

  const valueDatesFormat = valueDates.map((date) => {
    return moment(date, FORMAT_DATE_DAY_MONTH_YEAR_TWO);
  }) as unknown as [Moment, Moment];

  return (
    <Space>
      {showRangePicker && (
        <RangePicker
          defaultValue={defaultDateValue}
          value={valueDatesFormat}
          onChange={onChangeDates as any}
        />
      )}
      {showSearch && (
        <Search
          placeholder={placeHolder}
          onSearch={onSearchText}
          value={searchText}
          onChange={onChangeText}
          enterButton
        />
      )}
    </Space>
  );
};

export default HeaderList;
