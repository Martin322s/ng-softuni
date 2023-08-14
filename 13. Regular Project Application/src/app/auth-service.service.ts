import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'http://localhost:3030/users';

  constructor(private http: HttpClient) { }

  loginUser(userData: { email: string, password: string }) {
    return this.http.post(`${this.apiUrl}/login`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}