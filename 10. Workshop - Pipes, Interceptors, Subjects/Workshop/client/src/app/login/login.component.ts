import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isValidEmail(email: string): boolean {
    const isValid = /[^@]{6,}@gmail\.(bg|com)/.test(email);
    return isValid;
  }

  usernameLength(username: string): boolean {
    const isValid = username.length < 5;
    return isValid;
  }
}
