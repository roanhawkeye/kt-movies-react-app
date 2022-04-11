import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import Card from './Components/Card';

export const renderApp = () => {
  const App: FC = () => (
    <div>
      <h1>Hello App</h1>
      <Card />
    </div>
  );

  const target = document.getElementById('react-root');

  ReactDOM.render(<App />, target);
};
