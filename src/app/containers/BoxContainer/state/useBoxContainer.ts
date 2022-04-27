import { message } from 'antd';
import { repository } from '../../../../dependecy-injection';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { useBoxContext } from '../../../context/inventory/BoxContext/BoxContext';

const useBoxContainer = () => {
  const { setBoxList, viewFragmentButton } = useBoxContext();

  const { boxRepository } = repository;

  const handleChangeFilters = (filtersValue: FiltersValue) => {
    // TODO: Change logic
    console.log('filtersValue -->', filtersValue);

    const hide = message.loading('Obteniendo Cajas ...');

    boxRepository
      ?.getAll()
      .then((boxList) => {
        setBoxList(boxList);
      })
      .catch(() => {
        message.error('No se pudo obtener las cajas.s');
      })
      .finally(() => {
        hide();
      });
  };

  return {
    viewFragmentButton,
    actions: {
      handleChangeFilters
    }
  };
};

export default useBoxContainer;
