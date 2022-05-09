import { State } from 'StoreTypes';


export const selectMovies = (state: State) => state.movie.list.movies;
