import { api } from '@/lib/api-client.js';
import type { UserResponse } from '../types';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const login = (data: LoginCredentialsDTO): Promise<UserResponse> =>
  api.post('/auth/login', data);
