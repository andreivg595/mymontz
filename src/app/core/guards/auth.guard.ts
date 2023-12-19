import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { AppState } from '../store/AppState';
import { getIsLoggedIn } from '../store/login/login.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  readonly isLoggedIn$ = this.store.pipe(select(getIsLoggedIn));

  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isLoggedIn$.pipe(
      take(1),
      map((isLogged) => {
        if (!isLogged) {
          this.router.navigate(['/login']);
        }
        return isLogged;
      })
    );
  }
}
