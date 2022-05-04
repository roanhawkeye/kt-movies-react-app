import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import MovieList from './Components/MovieList/MovieList';
import Header from './Components/Header/Header';

import styled from 'styled-components';
import { Footer } from './Components/Footer/Footer';

const AppContainer = styled.div`
  background-color: #424242; ;
`;

export const renderApp = () => {
  const App: FC = () => (
    <AppContainer>
      <Header />
      <MovieList />
      <Footer>netflixroulette</Footer>
    </AppContainer>
  );

  const target = document.getElementById('react-root');

  ReactDOM.render(<App />, target);
};
