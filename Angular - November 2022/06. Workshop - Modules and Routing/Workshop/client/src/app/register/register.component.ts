import { Component } from '@angular/core';
import { generateUniqueId } from '../utils/generateToken';
import { users } from '../database/data';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router) {

  }
  getUserData(event: MouseEvent, data: any) {
    event.preventDefault();
    const { username, email, tel, password, rePassword } = data;

    if (password === rePassword) {
      const uniqueId = generateUniqueId();
      users.push({ _id: uniqueId, username, phone: tel, email, password })
      this.router.navigate(['/']);
    }
  }
}
