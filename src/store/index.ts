import { combineReducers, Middleware } from '@reduxjs/toolkit';
import { authReudcer } from './auth';
import { createStore } from './createStore';
import { movieDetailsReducer } from './movie/details/reducer';

import { movieListReducer } from './movie/list';
import { userReducer } from './user';


export const rootReducer = combineReducers({
    movie: combineReducers({
        list: movieListReducer,
        details: movieDetailsReducer,
    }),
    auth: authReudcer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStoreFacade = () => {
  const middleware: Middleware[] = [];

  return createStore<RootState>(rootReducer, middleware);
};

export { createStoreFacade as createStore };