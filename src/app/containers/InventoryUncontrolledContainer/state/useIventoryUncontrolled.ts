/* eslint-disable indent */
import { message } from 'antd';
import { repository } from '../../../../dependecy-injection';
import Catalog from '../../../../domain/models/catalog';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { useInventoryUncontrolledContext } from '../../../context/inventory/InventoryUncontrolledContext/InventoryUncontrolledContext';

const useInventoryUncontrolled = () => {
  // eslint-disable-next-line object-curly-newline
  const { setInventoryUncontrolled } = useInventoryUncontrolledContext();
  const { inventoryRepository } = repository;

  const handleChangeFilters = (filtersValue: FiltersValue) => {
    console.log('filtersValue -->', filtersValue);
    // TODO: put filters
    // const { from, to } = rangeDatesToString(filtersValue.rangeDates);

    const hide = message.loading('Obteniendo inventario ...');
    inventoryRepository
      ?.getAll()
      .then((values) => {
        const uncontrolled = values.filter((item) => {
          if (typeof item.device === 'object') {
            return (item.device as Catalog).type === 'notControlled';
          }
          return false;
        });
        setInventoryUncontrolled(uncontrolled);
      })
      .finally(() => {
        hide();
      });
  };

  return {
    actions: {
      handleChangeFilters
    }
  };
};

export default useInventoryUncontrolled;
