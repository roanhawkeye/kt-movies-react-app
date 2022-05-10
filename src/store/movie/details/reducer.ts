import { createReducer } from '@reduxjs/toolkit';
import { setMovie, setStatus } from './actions';
import { MovieDetailStatus } from './typings';

const initialState = {
    status: MovieDetailStatus.NonVisible,
    movie: {
        poster_path: '',
    },
};

export const movieDetailsReducer = createReducer(
    initialState,
    builder => builder
    .addCase(setStatus, (state, action) => {
       state.status = action.payload; 
    })
    .addCase(setMovie, (state, action) => {
       state.movie = action.payload;
    }),
);