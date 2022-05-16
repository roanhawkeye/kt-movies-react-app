import { createAction } from '@reduxjs/toolkit';
import { MovieGenresPayload, MovieListPayload, MovieSortOptionsPayload } from './typings';

export const movieListReceived = createAction<MovieListPayload>('@movies/MOVIE_LIST_RECEIVED');

export const movieGenresReceived = createAction<MovieGenresPayload>('@movies/MOVIE_GENRES_RECEIVED');

export const movieSortOptionsReceived = createAction<MovieSortOptionsPayload>('@movies/MOVIE_SORT_OPTIONS_RECEIVED');