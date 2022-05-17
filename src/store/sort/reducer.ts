import { createReducer } from '@reduxjs/toolkit';
import { setSortBy } from './actions';

const initialState = {
    term: '',
};

export const sortReducer = createReducer(
    initialState,
    builder => builder
      .addCase(setSortBy, (state, action)=> {
          state.term = action.payload;
      }),
);