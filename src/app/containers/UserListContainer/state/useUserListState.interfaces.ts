/* eslint-disable no-unused-vars */
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';

interface ReturnUseUserList {
  actions: {
    handleChangeFilters: (filtersValue: FiltersValue) => void;
  };
}

export type UseUserList = () => ReturnUseUserList;
