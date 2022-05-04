/* eslint-disable */
import { Action } from '../actions';


export default (state = [], action: Action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};