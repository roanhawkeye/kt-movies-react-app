import { Dispatch } from 'redux';
import { services } from '../services';

export interface Action {
    type: string;
    payload?: Object; 
}

export const getMovies = () => {
  return async (dispatch: Dispatch) => {
    const response = await services.movie.getMovies();
        dispatch({ type: 'GET_MOVIES', payload : response });
  }; 
};