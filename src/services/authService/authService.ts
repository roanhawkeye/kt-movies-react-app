/* eslint-disable */
import { HttpService } from '../httpService';

import { Password, UserId } from '../../domain';

export interface AuthService {
    localAuthentication(userId: UserId, password: Password): Boolean;
}

export const createAuthService = (http: HttpService) => {
  const localAuthentication = (userId: UserId, password: Password): Boolean => {
    if (userId === 'Daniel' && password === '1234') {
      return true;
    }
    return false;
  };

  return {
        localAuthentication,
    };

};

