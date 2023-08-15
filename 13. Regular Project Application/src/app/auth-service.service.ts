import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'http://localhost:3030/users';
  public isAuthenticatedSubject = new BehaviorSubject<Boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  
  constructor(private http: HttpClient) { }

  loginUser(userData: { email: string, password: string }) {
    return this.http.post(`${this.apiUrl}/login`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}