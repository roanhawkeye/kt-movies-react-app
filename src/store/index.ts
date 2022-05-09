import { combineReducers, Middleware } from '@reduxjs/toolkit';
import { createStore } from './createStore';

import { movieListReducer } from './movie/list';


export const rootReducer = combineReducers({
    movie: combineReducers({
        list: movieListReducer,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStoreFacade = () => {
  const middleware: Middleware[] = [];

  return createStore<RootState>(rootReducer, middleware);
};

export { createStoreFacade as createStore };