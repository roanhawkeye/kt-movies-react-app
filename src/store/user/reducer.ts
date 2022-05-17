import { createReducer } from '@reduxjs/toolkit';

import { User } from '../../domain/User';
import { userReceived } from './actions';

export const initialState: User  = {
    firstName: '',
    lastName: '',
};

export const userReducer = createReducer(
    initialState,
    builder => builder 
        .addCase(userReceived, (state, action) => ({
            ...state,
            ...action.payload,
        })),
);