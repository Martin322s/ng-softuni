import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) {

  }
  register(event: MouseEvent, username: string, email: string, phone:string, password: string, rePassword: string): void {
    event.preventDefault();
    this.userService.login();
    this.router.navigate(['/']);
  }
}
