import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { AuthenticationResponse } from '../models/authentication-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
      `${this.url}/auth/register`,
      user
    );
  }

  login(user: User): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
      `${this.url}/auth/login`,
      user
    );
  }

  getToken(): string | null {
    const state = JSON.parse(localStorage.getItem('state') || '{}');
    return state.token;
  }
}
