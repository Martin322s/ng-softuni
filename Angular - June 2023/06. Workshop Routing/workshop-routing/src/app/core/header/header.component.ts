import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {
    
  }

  get IsLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get firstName(): String {
    return this.userService.user?.firstName || '';
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}