import { Button } from 'antd';
import firebase from 'firebase';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SocketClient from '../../helpers/socket-client';
import MenuLayout from '../layouts/MenuLayout';
import Task from '../../domain/models/task';
import RangeDate from '../components/task/list/RangeDate';
import TableTasks from '../components/task/list/TableTasks';
import SearchTasks from '../components/task/list/SearchTasks';

const TasksListPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchType, setSearchType] = useState<'range' | 'search'>('range');

  const history = useHistory();

  const setTaskList = (newTasks: Task[], searchTypeArg: 'range' | 'search') => {
    setSearchType(searchTypeArg);
    setTasks(newTasks);
  };

  return (
    <MenuLayout menuItem="Tareas-Lista">
      <div>
        Tarea / Lista
        <RangeDate setTasks={setTaskList} inUse={searchType === 'range'} />
        <SearchTasks setTasks={setTaskList} inUse={searchType === 'search'} />
        <TableTasks tasks={tasks} />
        <Button
          onClick={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                // Sign-out successful.
                history.push('/login');
                SocketClient.getInstance().disconnect();
              })
              .catch((error) => {
                // An error happened.
                console.log('Error', error.message);
              });
          }}
        >
          Log Out
        </Button>
      </div>
    </MenuLayout>
  );
};

export default TasksListPage;
