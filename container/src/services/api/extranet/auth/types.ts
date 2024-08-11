import { ResponseAPI } from 'services/api/types';

export interface SignInRequest {
  userName: string;
  password: string;
  recaptcha: string;
}

export interface SignIn {
  token: string;
}

export type SignInResponse = ResponseAPI<SignIn>;
