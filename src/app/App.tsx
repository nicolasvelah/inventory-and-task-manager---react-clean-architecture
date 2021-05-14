/* eslint-disable object-curly-newline */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Session from './layouts/Session';

import LoginPage from './pages/login/LoginPage';
import PublicPage from './pages/PublicPage';
import TasksListPage from './pages/TaskListPage';
import DevicesPage from './pages/DevicesPage';

import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/public-page" component={PublicPage} />

        <Session>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/task/list" component={TasksListPage} />
          <Route exact path="/devices" component={DevicesPage} />
        </Session>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
