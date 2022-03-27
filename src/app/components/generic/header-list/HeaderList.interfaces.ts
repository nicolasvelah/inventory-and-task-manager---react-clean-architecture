/* eslint-disable no-unused-vars */
export interface FiltersValue {
  text?: string;
  rangeDates?: {
    from: string;
    to: string;
  };
}

export interface HeaderListProps {
  handleChangeFilters: (filtersValue: FiltersValue) => void;
  showSearch?: boolean;
  showRangePicker?: boolean;
  placeHolder?: string;
}
