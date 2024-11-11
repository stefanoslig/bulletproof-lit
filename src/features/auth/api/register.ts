import { api } from '@/lib/api-client.js';
import type { UserResponse } from '../types';

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const register = (data: RegisterCredentialsDTO): Promise<UserResponse> =>
  api.post('/auth/register', data);
