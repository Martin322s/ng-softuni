import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor() {
    let user: any = localStorage.getItem('session');
    if (user !== null) {
      user = JSON.parse(user);
    } else {
      user = {};
    }

    if (user?.accessToken) {
      this.isLoggedIn = true;
    }
  }
}
