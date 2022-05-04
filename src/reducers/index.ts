import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

export interface StateProps {
    movies: [];
}

export const rootReducer =  combineReducers({
    movies: moviesReducer,
});