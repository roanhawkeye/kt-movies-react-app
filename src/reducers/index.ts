import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

export interface StateProps {
    movies: [];
}

export default combineReducers({
    movies: moviesReducer,
});