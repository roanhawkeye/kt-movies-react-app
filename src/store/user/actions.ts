import { createAction } from '@reduxjs/toolkit';
import { User } from '../../domain/User';

export const userReceived = createAction<User>('@user/USER_RECEIVED');