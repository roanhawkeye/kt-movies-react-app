import { Thunk } from 'StoreTypes';

import { movieListReceived } from './actions';

export const getMovies = (searchQuery: string): Thunk => async (dispatch, _getState, { services }) => {
    
  try {
    const result = await services.movie.getMovies(searchQuery);

    if (result) {
            dispatch(movieListReceived(result));
    }
  } catch (error) {
        console.log(error);
  }
};