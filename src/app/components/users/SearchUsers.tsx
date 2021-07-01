import React, { FunctionComponent, useState } from 'react';
import { Input } from 'antd';
import User from '../../../domain/models/user';
import DependecyInjection from '../../../dependecy-injection';

const { Search } = Input;

const SearchUsers: FunctionComponent<{
  // eslint-disable-next-line no-unused-vars
  setUsers: (newUsers: User[]) => void;
}> = ({ setUsers }) => {
  const { usersRepository } = DependecyInjection.getInstance();

  const [value, setValue] = useState<string>('');

  const onSearch = async (valueSearch: string) => {
    console.log('values -->', valueSearch);
    const resp = await usersRepository.findByValue(valueSearch);
    setUsers(resp);
  };

  const onChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Search
        placeholder="Buscar usuario por nombre, apellido o email"
        onSearch={onSearch}
        value={value}
        onChange={onChange}
        enterButton
      />
    </div>
  );
};

export default SearchUsers;
