import { createReducer } from '@reduxjs/toolkit';

import { Movie } from '../../../domain';
import { movieGenresReceived, movieListReceived, movieSortOptionsReceived } from './actions';

export interface MovieListState {
    movies: Movie[];
    sortByOptions: string[];
    genres: string[];
}

const initialState: MovieListState = {
    movies: [],
    sortByOptions: [],
    genres: [],
};

export { initialState as movieListInitialState };

export const movieListReducer = createReducer(
    initialState,
    builder => builder
    .addCase(movieListReceived, (state, action) => {
        state.movies = action.payload.movies;
    })
    .addCase(movieGenresReceived, (state, action)=> {
        state.genres = action.payload.genres;
    })
    .addCase(movieSortOptionsReceived, (state, action) => {
        state.sortByOptions = action.payload.options;
    }),
);