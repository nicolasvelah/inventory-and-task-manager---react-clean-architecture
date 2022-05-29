import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../dependecy-injection';
import { momentFormat } from '../../../../../../utils/moment-utils';
import { useInventoryContext } from '../../../../../context/inventory/InventoryContext/InventoryContext';

export interface DataTableTechnicals {
  key: string;
  name: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
}

const useModalLinkedInventoryTechnical = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [dataTable, setDataTable] = useState<DataTableTechnicals[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const { rowSelection, setInventory } = useInventoryContext();
  const { usersRepository, inventoryRepository } = repository;

  useEffect(() => {
    const hide = message.loading('Obteniendo técnicos ...');

    usersRepository
      ?.getTechnicals()
      .then((users) => {
        const table = users.map((item) => ({
          key: item._id,
          name: item.name,
          lastName: item.lastName,
          dateOfBirth: item.dateOfBirth ? momentFormat(item.dateOfBirth) : '',
          email: item.email,
          phone: item.phone
        }));
        setDataTable(table);
      })
      .finally(() => {
        hide();
      });
  }, []);

  const handleCancel = () => {
    setVisibleModal(false);
  };

  const handleOpen = () => {
    setVisibleModal(true);
  };

  const onChangeText = (event: any) => {
    setSearchText(event.target.value);
  };

  const onSearchText = async (value: string) => {
    const hide = message.loading('Buscando técnicos ...');

    usersRepository
      ?.getTechnicals(value)
      .then((users) => {
        const table = users.map((item) => ({
          key: item._id,
          name: item.name,
          lastName: item.lastName,
          dateOfBirth: item.dateOfBirth ? momentFormat(item.dateOfBirth) : '',
          email: item.email,
          phone: item.phone
        }));
        setDataTable(table);
      })
      .finally(() => {
        hide();
      });
  };

  const reloadInventory = () => {
    const hide = message.loading('Obteniendo inventario ...');
    inventoryRepository
      ?.getAll()
      .then((values) => {
        setInventory(values);
      })
      .finally(() => {
        hide();
      });
  };

  const linkedInventoryTechnical =
    (inventorySelected: string[]) => (idTechnical: string) => () => {
      const payload = inventorySelected.map((element) => ({
        id: element,
        userId: idTechnical
      }));

      const hide = message.loading('Vinculando inventario ...');

      inventoryRepository
        ?.assingUser(payload)
        .then(() => {
          handleCancel();
          rowSelection.onChange({}, []);
          message.success('Inventario vinculado');
          reloadInventory();
        })
        .catch(() => {
          message.error('No se pudo vincular el inventario');
        })
        .finally(() => {
          hide();
        });
    };

  return {
    dataTable,
    visibleModal,
    searchText,
    rowSelection,
    actions: {
      handleCancel,
      handleOpen,
      onSearchText,
      onChangeText,
      linkedInventoryTechnical
    }
  };
};

export default useModalLinkedInventoryTechnical;
