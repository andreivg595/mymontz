import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState';
import { logout } from '../store/login/login.actions';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    );
  }

  handleError(err: HttpErrorResponse) {
    if (err.status === 401 || err.status === 403) {
      this.store.dispatch(logout());
      localStorage.removeItem('state');
      this.router.navigate(['/login']);
    }
    return throwError(() => new Error(err.message || 'Server error'));
  }
}
