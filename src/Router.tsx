import React, { FC } from 'react';
import styled from 'styled-components';
import {
  Switch,
  Redirect,
  Route,
  Router,
} from 'react-router-dom';


import { history } from './history';
import { Home } from './screens/home';
import { LogInRoute } from './Routes';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from './store/auth';
import { appRoutes } from './appRoutes';
import { Auth } from './Auth';

const AppContainer = styled.div`
  background-color: #424242;
`;


export const AppRouter: FC = () => {
  const status = useSelector(selectAuthStatus);

  return (
    <Router history={history}>
      <AppContainer>
        <Switch>
          <LogInRoute status={status} path={appRoutes.login} component={Auth} />
          <Route path={appRoutes.search} exact component={Home} />
          <Route path={appRoutes.root}>
            <Redirect to={appRoutes.search} />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
};