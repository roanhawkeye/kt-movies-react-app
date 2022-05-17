import { createAction } from '@reduxjs/toolkit';
import { SearchPayload } from './typings';

export const setSearchTerm = createAction<SearchPayload>('@search/SET_SEARCH_TERM');
