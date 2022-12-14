/* eslint-disable object-curly-newline */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Session from './layouts/Session';

import LoginPage from './pages/login/LoginPage';
import PublicPage from './pages/PublicPage';
import TasksListPage from './pages/task-pages/task-list/TaskListPage';
import DevicesPage from './pages/DevicesPage';
import PlacesPage from './pages/places/PlacesPage';
import CatalogPage from './pages/materials/catalog/CatalogPage';
import CategoriesPage from './pages/materials/categories/CategoriesPage';
import InventoryPage from './pages/materials/inventory/InventoryPage';
import BoxPage from './pages/materials/box/BoxPage';
import ResetPassPage from './pages/reset-pass/ResetPassPage';

import 'antd/dist/antd.css';
import { UserContextProvider } from './context/global/UserGlobalContext';
import NotFound from './pages/not-found/NotFound';
import UserPage from './pages/user/UserPage';
import '../assets/et-styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/public-page" component={PublicPage} />
        <Route exact path="/reset/:token/:email" component={ResetPassPage} />
        <UserContextProvider>
          <Session>
            <Route exact path="/login" component={LoginPage} />

            <Route exact path="/task/list" component={TasksListPage} />

            <Route
              exact
              path="/materials/categories"
              component={CategoriesPage}
            />

            <Route exact path="/materials/catalog" component={CatalogPage} />
            <Route
              exact
              path="/materials/inventory"
              component={InventoryPage}
            />
            <Route exact path="/materials/box" component={BoxPage} />

            <Route exact path="/users" component={UserPage} />

            <Route exact path="/devices" component={DevicesPage} />

            <Route exact path="/places" component={PlacesPage} />
          </Session>
        </UserContextProvider>
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
