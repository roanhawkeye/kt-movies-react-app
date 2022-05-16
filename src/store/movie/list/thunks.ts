import { Thunk } from 'StoreTypes';
import { GetMovieParams } from '../../../services/movieService';

import { movieGenresReceived, movieListReceived, movieSortOptionsReceived } from './actions';

export const getMovies = (params: GetMovieParams): Thunk => async (dispatch, _getState, { services }) => {
    
  try {
    const result = await services.movie.getMovies(params);

    if (result) {
            dispatch(movieListReceived(result));
    }
  } catch (error) {
        console.log(error);
  }
};

export const getGenres = (): Thunk => async (dispatch, _getState, { services }) => {
    
  try {
    const result = await services.movie.getGenres();

    if (result) {
            dispatch(movieGenresReceived(result));
    }
  } catch (error) {
        console.log(error);
  }
};

export const getSortByOptions = (): Thunk => async (dispatch, _getState, { services }) => {
    
  try {
    const result = await services.movie.getSortOptions();

    if (result) {
            dispatch(movieSortOptionsReceived(result));
    }
  } catch (error) {
        console.log(error);
  }
};