import { createAction } from '@reduxjs/toolkit';
import { Movie } from '../../../domain';

import { MovieDetailStatus } from './typings';

export const setStatus = createAction<MovieDetailStatus>('@movies/SET_STATUS');

export const setMovie = createAction<Movie>('@movies/SET_MOVIE');