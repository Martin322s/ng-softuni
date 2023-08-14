import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'http://localhost:3030/users';
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) { }

  isLoggedIn() { return this.isAuthenticated }
  loginUser(userData: { email: string, password: string }) {
    this.isAuthenticated = true;
    return this.http.post(`${this.apiUrl}/login`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}