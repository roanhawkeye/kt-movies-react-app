/* eslint-disable */
import { ThunkExtraArgument } from 'StoreTypes';
import { configureStore, Middleware, Reducer } from '@reduxjs/toolkit';

import { services } from '../services';

const configureDefaultMiddleware = (getDefaultMiddleware: Function) => {
  return getDefaultMiddleware({
        thunk: {
            extraArgument: {
                services,
            } as ThunkExtraArgument,
        },
        serializableCheck: false,
    });
};

const createStore = <S>(
  rootReducer: Reducer,
  customMiddleware: Middleware[],
) => {
  const config = {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware: Function) => {
          return [...configureDefaultMiddleware(getDefaultMiddleware), ...customMiddleware];
        },
        devTools: true,
    };

  return configureStore(config);
};

export { createStore };