/* eslint-disable indent */
import { message } from 'antd';
import { repository } from '../../../../dependecy-injection';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { useInventoryContext } from '../../../context/inventory/InventoryContext/InventoryContext';

const useInventory = () => {
  // eslint-disable-next-line object-curly-newline
  const {
    setInventory,
    rowSelection: { selectedRowKeys }
  } = useInventoryContext();
  const { inventoryRepository } = repository;

  const handleChangeFilters = (filtersValue: FiltersValue) => {
    const filterText =
      !filtersValue.text || filtersValue.text === ''
        ? undefined
        : filtersValue.text;

    const hide = message.loading('Obteniendo inventario ...');
    inventoryRepository
      ?.getAll(filterText)
      .then((values) => {
        setInventory(values);
      })
      .finally(() => {
        hide();
      });
  };

  return {
    activateButton: selectedRowKeys.length > 0,
    actions: {
      handleChangeFilters
    }
  };
};

export default useInventory;
