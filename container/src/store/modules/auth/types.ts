export enum AuthTypes {
  TOKEN_SUCCESS = '@auth/TOKEN_SUCCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
  SIGN_RESET = '@auth/SIGN_RESET',
}

export interface AuthState {
  readonly loading: boolean;
  readonly error: boolean;
  readonly token: string | null;
  readonly signed: boolean;
}
