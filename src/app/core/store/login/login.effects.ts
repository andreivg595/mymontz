import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { login, loginFailure, loginSuccess } from './login.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthenticationResponse } from '../../models/authentication-response.model';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ username, password }) =>
        this.authService.login({ username, password }).pipe(
          map((authenticationResponse: AuthenticationResponse) =>
            loginSuccess({ authenticationResponse })
          ),
          catchError((error) => of(loginFailure({ error })))
        )
      )
    )
  );
}
