/* eslint-disable object-curly-newline */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Session from './layouts/Session';

import LoginPage from './pages/login/LoginPage';
import PublicPage from './pages/PublicPage';
import TasksListPage from './pages/task-pages/task-list/TaskListPage';
import TasksBoardPage from './pages/task-pages/task-board/TaskBoardPage';
import DevicesPage from './pages/DevicesPage';
import PlacesPage from './pages/places/PlacesPage';

import 'antd/dist/antd.css';
import { UserContextProvider } from './context/global/UserGlobalContext';
import NotFound from './pages/not-found/NotFound';
import UserPage from './pages/user/UserPage';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Session>
          <Switch>
            <Route exact path="/public-page" component={PublicPage} />

            <Route exact path="/login" component={LoginPage} />

            <Route exact path="/task/list" component={TasksListPage} />
            <Route exact path="/task/board" component={TasksBoardPage} />

            <Route exact path="/users" component={UserPage} />

            <Route exact path="/devices" component={DevicesPage} />

            <Route exact path="/places" component={PlacesPage} />

            <Route exact path="*" component={NotFound} />
          </Switch>
        </Session>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
