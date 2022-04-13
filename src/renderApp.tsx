import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import MovieList from './Components/MovieList';

export const renderApp = () => {
  const App: FC = () => (
    <div>
      <MovieList />
    </div>
  );

  const target = document.getElementById('react-root');

  ReactDOM.render(<App />, target);
};
