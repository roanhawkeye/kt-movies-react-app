import { createAction } from '@reduxjs/toolkit';
import { MovieListPayload } from './typings';

export const movieListReceived = createAction<MovieListPayload>('MOVIE_LIST_RECEIVED');