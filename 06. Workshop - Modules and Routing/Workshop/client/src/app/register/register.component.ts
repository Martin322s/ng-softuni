import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  getUserData(event: MouseEvent, data: any) {
    event.preventDefault();
    const { username, email, tel, password, rePassword } = data;

    if (password === rePassword) {
      console.log(username, email, tel, password);
    }
  }
}
