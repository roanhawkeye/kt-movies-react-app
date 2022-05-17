import { State } from 'StoreTypes';

export const selectAuthStatus = (state: State) => state.auth.status;