import { Component } from '@angular/core';
import { AuthService } from '../services/authService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  data: any;
  constructor(private authService: AuthService) {
    this.authService.getProfile().subscribe({
      next: (res) => this.data = res,
      error: (err) => console.log(err)
    });
    console.log(this.data);
  }
}
