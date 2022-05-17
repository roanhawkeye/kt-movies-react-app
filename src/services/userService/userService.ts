/* eslint-disable */
import { User } from '../../domain';
import { HttpService } from '../httpService';

export interface UserService {
    getMockUser(): Promise<User>;
}

export const createUserService = (http: HttpService) => {
  const getMockUser = async () => {
    const { data } = await new Promise((resolve) => {
            resolve({ data: {
                firstName: 'Daniel',
                lastName: 'Martinez', 
            } });
    });

    return data;
  };

  return {
        getMockUser,
    };
};

