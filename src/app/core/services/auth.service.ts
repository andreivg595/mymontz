import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}/auth/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}/auth/login`, user);
  }
}
