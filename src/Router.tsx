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

const AppContainer = styled.div`
  background-color: #424242;
`;


export const AppRouter: FC = () => {

  return (
    <Router history={history}>
      <AppContainer>
        <Switch>
          <Route path="/search" exact component={Home} />
          <Route path="/">
            <Redirect to="/search" />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
};