import { State } from 'StoreTypes';

export const selectMovie = (state: State) => state.movie.details.movie;

export const selectStatus = (state: State) => state.movie.details.status;