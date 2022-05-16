import { State } from 'StoreTypes';


export const selectMovies = (state: State) => state.movie.list.movies;

export const selectGenresOptions = (state: State) => state.movie.list.genres;

export const selectSortByOptions = (state: State) => state.movie.list.sortByOptions;

