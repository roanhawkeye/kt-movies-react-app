import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MovieList from './Components/MovieList/MovieList';
import Header from './Components/Header/Header';
import reducers from './reducers';

import styled from 'styled-components';
import { Footer } from './Components/Footer/Footer';

const AppContainer = styled.div`
  background-color: #424242; ;
`;

export const renderApp = () => {
  const App: FC = () => (
    <Provider store={createStore(reducers)} >
      <AppContainer>
        <Header />
        <MovieList />
        <Footer>netflixroulette</Footer>
      </AppContainer>
    </Provider>
  );

  const target = document.getElementById('react-root');

  ReactDOM.render(<App />, target);
};
