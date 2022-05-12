import { createReducer } from '@reduxjs/toolkit';
import { setGenre } from './actions';

const initialState = {
    value: '',
};

export const genreReducer = createReducer(
    initialState,
    builder => builder
       .addCase(setGenre, (state, action) => {
           state.value = action.payload;
       }),
);