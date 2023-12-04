import { Injectable } from '@angular/core';
import { UserId } from '../types/user-id';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const localStorageUser: any = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(localStorageUser);
    } catch (err) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: 'm.sofroniev12@gmail.com',
      firstName: 'Martin',
      phoneNumber: '0877040853',
      password: '123456'
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
