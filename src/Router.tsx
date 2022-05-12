import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Redirect, Router } from 'react-router-dom';


import { history } from './history';
import { Home } from './screens/home';
import { LogInRoute, PrivateRoute } from './Routes';
import { useSelector } from 'react-redux';
import { AuthStatus, selectAuthStatus } from './store/auth';
import { appRoutes } from './appRoutes';
import { Auth } from './Components/Auth';
import { Dispatch } from 'StoreTypes';
import { useDispatch } from 'react-redux';
import { getUser } from './store/user';

const AppContainer = styled.div`
  background-color: #424242;
`;


export const AppRouter: FC = () => {
  const dispatch: Dispatch = useDispatch();
  
  const isAuthenticated = localStorage.getItem('isAuthenticated') || 'false';
  /* eslint-disable-next-line react-hooks/rules-of-hooks */
  const status = isAuthenticated === 'true' ? AuthStatus.Success : useSelector(selectAuthStatus);

  useEffect(() => {
    if (status === AuthStatus.Success) {
      dispatch(getUser());
    }
  }, []);


  return (
    <Router history={history}>
      <AppContainer>
        <Switch>
          <LogInRoute status={status} path={appRoutes.login} exact component={Auth} />
          <PrivateRoute status={status} path={appRoutes.root} exact>
            <Redirect to={appRoutes.search} />
          </PrivateRoute>
          <PrivateRoute status={status} path={appRoutes.searchWithParams} component={Home} />
        </Switch>
      </AppContainer>
    </Router>
  );
};