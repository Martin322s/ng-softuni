import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  isValidEmail(email: string): boolean {
    const isValid = /[^@]{6,}@gmail\.(bg|com)/.test(email);
    return isValid;
  }

  usernameLength(username: string): boolean {
    const isValid = username.length < 5;
    return isValid;
  }
}
