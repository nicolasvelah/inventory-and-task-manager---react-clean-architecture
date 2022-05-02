import { message } from 'antd';
import { repository } from '../../../../dependecy-injection';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { useBoxContext } from '../../../context/inventory/BoxContext/BoxContext';

const useBoxContainer = () => {
  const {
    setBoxList,
    viewFragmentButton,
    itemSelected,
    setViewDrawer,
    viewDrawer,
    itemsSelectedModal,
    rowSelection
  } = useBoxContext();

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
        message.error('No se pudo obtener las cajas.');
      })
      .finally(() => {
        hide();
      });
  };

  const onCloseDrawer = () => {
    setViewDrawer(false);
  };

  const onSubmitFragment = () => {
    rowSelection.onChange({}, []);
    handleChangeFilters({});
  };

  return {
    itemsSelectedModal,
    viewFragmentButton,
    itemSelected,
    viewDrawer,
    actions: {
      handleChangeFilters,
      onCloseDrawer,
      onSubmitFragment
    }
  };
};

export default useBoxContainer;
