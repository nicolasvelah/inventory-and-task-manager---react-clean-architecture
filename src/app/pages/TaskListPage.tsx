import { Button } from 'antd';
import firebase from 'firebase';
import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuLayout from '../layouts/MenuLayout';

const TasksListPage = () => {
  const history = useHistory();
  return (
    <MenuLayout menuItem="Tareas-Lista">
      <div>
        TasksListPagee
        <Button
          onClick={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                // Sign-out successful.
                history.push('login');
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
