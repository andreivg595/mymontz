import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { register, registerFailure, registerSuccess } from './register.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class RegisterEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap(({ email, username, password }) =>
        this.authService.register({ email, username, password }).pipe(
          map((user) => registerSuccess({ user })),
          catchError((error) => of(registerFailure({ error })))
        )
      )
    )
  );
}
