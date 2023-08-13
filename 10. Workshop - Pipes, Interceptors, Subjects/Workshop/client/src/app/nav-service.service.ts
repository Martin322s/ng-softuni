import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isRegistered$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  private registrationStorageKey = 'false';
  stat = 'stat';

  constructor() {
    const storedStatus = localStorage.getItem('stat');
    if (storedStatus === 'true') {
      this.isLoggedInSubject.next(true);
    }
  }

  register() {
    this.isLoggedInSubject.next(true);
    localStorage.setItem(this.stat, 'true');
  }

  getUsername(): string {
    const userItem = localStorage.getItem('user');
    let user = null;

    if (userItem !== null) {
      try {
        user = JSON.parse(userItem);
      } catch (error) {
        user = {};
      }
    }

    if (user?._id) {
      return user?.username;
    } else {
      return '';
    }
  }
}
