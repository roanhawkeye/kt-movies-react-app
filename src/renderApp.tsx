import { Store } from 'StoreTypes';
import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { AppRouter } from './Router';

export const renderApp = (store: Store) => {

  const App: FC = () => {
    return (
      <Provider store={store} >
        <AppRouter />
      </Provider>
    );
  };
  

  const target = document.getElementById('react-root');
  const root = createRoot(target!);
  root.render(<App />);
};
