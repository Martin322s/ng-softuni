import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {
  usernameLength(username: string, limit: number): boolean {
    const isValid = username.length < limit;
    return isValid;
  }

  submitHandler(postForm: NgForm) {
    console.log(postForm.value);
    
  }
}
