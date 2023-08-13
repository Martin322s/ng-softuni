import { Component } from '@angular/core';
import { AuthService } from '../services/authService';
import { getToken } from '../utils/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  data: any;
  constructor(private authService: AuthService) {
    const token = getToken();
    this.authService.getProfile(token).subscribe({
      next: (res) => this.data = res,
      error: (err) => console.log(err)
    });
    console.log(this.data);
  }
}
