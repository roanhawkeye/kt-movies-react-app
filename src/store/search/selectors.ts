import { State } from 'StoreTypes';

export const selectSearchTerm = (state: State) => state.search.term;