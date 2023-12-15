import { createReducer, on } from '@ngrx/store';
import { AppInitialState } from '../AppInitialState';
import { LoginState } from './LoginState';
import { login, loginFailure, loginSuccess } from './login.actions';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../models/user.model';
import { Role } from '../../models/role.enum';

const initialState: LoginState = AppInitialState.login;

export const loginReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
    error: null,
    isLoggedIn: false,
    isLoggingIn: true,
  })),
  on(loginSuccess, (state, { authenticationResponse }) => ({
    ...state,
    token: authenticationResponse.token,
    user: getUser(authenticationResponse.token),
    isLoggedIn: true,
    isLoggingIn: false,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    isLoggingIn: false,
    error,
  }))
  //on(logout, () => initialState)
);
function getUser(token: string): User {
  const decoded = jwtDecode(token) as JwtPayload;
  const user: User = {
    id: decoded.id,
    username: decoded.username,
    email: decoded.email,
    role: decoded.role,
  };
  return user;
}

interface JwtPayload {
  iss?: string;
  sub?: string;
  id?: number;
  username?: string;
  email?: string;
  role?: Role;
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
}
