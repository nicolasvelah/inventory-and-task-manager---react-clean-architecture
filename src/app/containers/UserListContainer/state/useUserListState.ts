/* eslint-disable indent */
import { message } from 'antd';
import { repository } from '../../../../dependecy-injection';
import { FiltersValue } from '../../../components/generic/header-list/HeaderList.interfaces';
import { useUserListContext } from '../../../context/user/UserListContext';
import { UseUserList } from './useUserListState.interfaces';

const useUserListState: UseUserList = () => {
  const { setUsers } = useUserListContext();
  const { usersRepository } = repository;

  const searchUsers = (text: string) => {
    const hide = message.loading('Buscando usuarios ...');

    usersRepository
      ?.findByValue(text)
      .then((values) => {
        setUsers(values);
      })
      .finally(() => {
        hide();
      });
  };

  const handleChangeFilters = (filtersValue: FiltersValue) => {
    if (filtersValue.text) {
      searchUsers(filtersValue.text);
      return;
    }

    const hide = message.loading('Obteniendo usuarios ...');
    usersRepository
      ?.getCoordinatorsAndTechnicals()
      .then((values) => {
        setUsers(values ?? []);
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

export default useUserListState;
