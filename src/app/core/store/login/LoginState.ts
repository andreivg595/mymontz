import { User } from '../../models/user.model';

export interface LoginState {
  token: string | null;
  user: User | null;
  error: any;
  isLoggedIn: boolean;
  isLoggingIn: boolean;
}
