import { Thunk } from 'StoreTypes';
import { GetMovieParams } from '../../../services/movieService';

import { movieListReceived } from './actions';

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