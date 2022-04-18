import { repository } from '../../../../dependecy-injection';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { useBoxContext } from '../../../context/inventory/BoxContext/BoxContext';

const useBoxContainer = () => {
  const { setBoxList } = useBoxContext();

  const { boxRepository } = repository;

  const handleChangeFilters = (filtersValue: FiltersValue) => {
    // TODO: Change logic
    console.log('filtersValue -->', filtersValue);
    boxRepository?.getAll().then((boxList) => {
      console.log('boxList -->', boxList);
      setBoxList([]);
    });
  };

  return {
    actions: {
      handleChangeFilters
    }
  };
};

export default useBoxContainer;
