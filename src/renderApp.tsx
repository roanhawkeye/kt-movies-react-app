import { Store } from 'StoreTypes';
import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import MovieList from './Components/MovieList/MovieList';
import Header from './Components/Header/Header';

import styled from 'styled-components';
import { Footer } from './Components/Footer/Footer';




const AppContainer = styled.div`
  background-color: #424242;
`;

export const renderApp = (store: Store) => {

  const App: FC = () => {
    return (
      <Provider store={store} >
        <AppContainer>
          <Header />
          <MovieList />
          <Footer>netflixroulette</Footer>
        </AppContainer>
      </Provider>
    );
  };
  

  const target = document.getElementById('react-root');
  const root = createRoot(target!);
  root.render(<App />);
};
