import { Component } from '@angular/core';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {
  usernameLength(username: string): boolean {
    const isValid = username.length < 10;
    return isValid;
  }
}
