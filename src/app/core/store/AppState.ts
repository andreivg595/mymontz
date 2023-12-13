import { LoadingState } from './loading/LoadingState';
import { LoginState } from './login/LoginState';
import { RegisterState } from './register/RegisterState';

export interface AppState {
  loading: LoadingState;
  register: RegisterState;
  login: LoginState;
}
