import { AppState } from './AppState';

export const AppInitialState: AppState = {
  loading: {
    show: false,
  },
  register: {
    error: null,
    isRegistered: false,
    isRegistering: false,
  },
  login: {
    token: null,
    user: null,
    error: null,
    isLoggedIn: false,
    isLoggingIn: false,
  },
};
