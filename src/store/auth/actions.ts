import { createAction } from '@reduxjs/toolkit';

import { AuthStatus } from './typings';

export const setAuthStatus = createAction<AuthStatus>('@auth/SET_AUTH_STATUS');
