import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Register Page] Register',
  props<{ email: string; username: string; password: string }>()
);

export const registerSuccess = createAction(
  '[Register API] Register Success',
  props<{ readonly user: any }>()
);

export const registerFailure = createAction(
  '[Register API] Register Failure',
  props<{ readonly error: any }>()
);

export const purge = createAction('[Register Page] Purge');
