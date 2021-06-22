import { Button } from 'antd';

import React from 'react';
import MenuLayout from '../../layouts/MenuLayout';
import TableUsers from '../../components/users/TableUsers';

const UserPage = () => {
  return (
    <MenuLayout menuItem="Usuarios">
      <div className="user-page">
        Usuarios
        <div className="header">
          <div className="header-first-block">
            {/* <RangeDate setTasks={setTaskList} inUse={searchType === 'range'} /> */}
            {/* <SearchTasks setTasks={setTaskList} inUse={searchType === 'search'} /> */}
          </div>
          <Button>Crear</Button>
        </div>
        <TableUsers users={[]} />
      </div>
    </MenuLayout>
  );
};

export default UserPage;
