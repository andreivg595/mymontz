import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Login API] Login Success',
  props<{ readonly user: any }>()
);

export const loginFailure = createAction(
  '[Login API] Login Failure',
  props<{ readonly error: any }>()
);
