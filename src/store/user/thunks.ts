import { Thunk } from 'StoreTypes';

import { userReceived } from './actions';
import { setAuthStatus, AuthStatus } from '../auth';

export const getUser = (): Thunk => {
  return async (dispath, _getState, { services }) => {
    try {
      const user = await services.user.getMockUser();
            dispath(userReceived(user));
    } catch (error) {
            dispath(setAuthStatus(AuthStatus.Failure));
    }
  };
};