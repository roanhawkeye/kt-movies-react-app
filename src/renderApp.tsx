import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import MovieList from './Components/MovieList/MovieList';
import Header from './Components/Header/Header';

import styled from 'styled-components';
import { FooterContent } from './Components/Footer/Footer.styled';

const AppContainer = styled.div`
  background-color: #424242; ;
`;

export const renderApp = () => {
  const App: FC = () => (
    <AppContainer>
      <Header />
      <MovieList />
      <FooterContent>netflixroulette</FooterContent>
    </AppContainer>
  );

  const target = document.getElementById('react-root');

  ReactDOM.render(<App />, target);
};
