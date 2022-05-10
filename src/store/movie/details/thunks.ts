import { Thunk } from 'StoreTypes';

import { MovieId } from '../../../domain';
import { setMovie } from './actions';

export const getMovieDetails = (movieId: MovieId): Thunk => async (dispatch, _getState, { services }) => {
    dispatch(setMovie(await services.movie.getMovie(movieId)));
};