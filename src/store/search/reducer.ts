import { createReducer } from '@reduxjs/toolkit';

import { setSearchTerm } from './actions';

const initialState = {
    term: '',
};

export const searchReducer = createReducer(
  initialState,
  builder => builder
    .addCase(setSearchTerm, (state, action)=>{
        state.term = action.payload.term;
    }),
);
