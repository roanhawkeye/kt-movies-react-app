import React, { FC } from 'react';
import styled from 'styled-components';
import { Switch, Redirect, Router } from 'react-router-dom';


import { history } from './history';
import { Home } from './screens/home';
import { LogInRoute, PrivateRoute } from './Routes';
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
          <PrivateRoute status={status} path={appRoutes.search} exact component={Home} />
          <PrivateRoute status={status} path={appRoutes.root}>
            <Redirect to={appRoutes.search} />
          </PrivateRoute>
        </Switch>
      </AppContainer>
    </Router>
  );
};