import { Dispatch } from 'redux';
import movieService from '../services/movieService';

export interface Action {
    type: string;
    payload?: Object; 
}

export const getMovies = () => {
  return async (dispatch: Dispatch) => {
    const response = await movieService.get('/movies');
        dispatch({ type: 'GET_MOVIES', payload : response.data.data });
  }; 
};