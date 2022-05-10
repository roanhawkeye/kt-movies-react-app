import { createReducer } from '@reduxjs/toolkit';

import { Movie } from '../../../domain';
import { movieListReceived } from './actions';

export interface MovieListState {
    movies: Movie[];
}

const initialState: MovieListState = {
    movies: [],
};

export { initialState as movieListInitialState };

export const movieListReducer = createReducer(
    initialState,
    builder => builder
    .addCase(movieListReceived, (state, action) => {
        state.movies = action.payload.movies;
    }),
);