import { createReducer } from '@reduxjs/toolkit';

import { setAuthStatus } from './actions';
import { AuthStatus } from './typings';
import { userReceived } from '../user/actions';

const initialState = {
    status: AuthStatus.Pending,
};

export const authReudcer = createReducer(
    initialState,
    builder => builder
        .addCase(setAuthStatus, (state, action) => {
            state.status = action.payload;
        })
        .addCase(userReceived, (state) => {
            state.status = AuthStatus.Success;
        }),
);
