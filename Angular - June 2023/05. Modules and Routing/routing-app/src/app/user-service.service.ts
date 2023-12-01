import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { User } from './interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}