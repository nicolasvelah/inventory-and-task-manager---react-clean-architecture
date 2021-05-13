/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import firebase from 'firebase';

import Session from './layouts/Session';

import LoginPage from './pages/LoginPage';
import PublicPage from './pages/PublicPage';
import TasksListPage from './pages/TaskListPage';

import DependecyInjection from '../dependecy-injection';

// import firebaseConfig from '../firebase-config';

import 'antd/dist/antd.css';

function App() {
  useEffect(() => {
    // firebase.initializeApp(firebaseConfig);
    DependecyInjection.getInstance();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/public-page" component={PublicPage} />

        <Session>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/task/list" component={TasksListPage} />
        </Session>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
