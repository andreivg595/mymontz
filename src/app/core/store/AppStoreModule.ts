import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loadingReducer } from './loading/loading.reducers';
import { registerReducer } from './register/register.reducers';
import { loginReducer } from './login/login.reducers';
import { RegisterEffects } from './register/register.effects';
import { LoginEffects } from './login/login.effects';

export const AppStoreModule = [
  StoreModule.forRoot([]),
  StoreModule.forFeature('loading', loadingReducer),
  StoreModule.forFeature('register', registerReducer),
  StoreModule.forFeature('login', loginReducer),
  EffectsModule.forRoot([]),
  EffectsModule.forFeature([RegisterEffects, LoginEffects]),
];
