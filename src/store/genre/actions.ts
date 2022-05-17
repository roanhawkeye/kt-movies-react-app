import { createAction } from '@reduxjs/toolkit';

export const setGenre = createAction<string>('@genre/SET_GENRE');