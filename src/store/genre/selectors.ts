import { State } from 'StoreTypes';

export const selectGenre = (state: State) => state.genre.value;