import React, { FC } from 'react';

import {
  Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import { history } from './history';
import { Home } from './screens/home';

export const AppRouter: FC = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route path="/search" exact component={Home} />
        <Route path="/">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </Router>
  );
};