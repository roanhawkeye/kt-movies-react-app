import { createAction } from '@reduxjs/toolkit';
import { MovieListPayload } from './typings';

export const movieListReceived = createAction<MovieListPayload>('@movies/MOVIE_LIST_RECEIVED');