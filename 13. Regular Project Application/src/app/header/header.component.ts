import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {;
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  LoggedIn() {
    return this.isLoggedIn;
  }
}
