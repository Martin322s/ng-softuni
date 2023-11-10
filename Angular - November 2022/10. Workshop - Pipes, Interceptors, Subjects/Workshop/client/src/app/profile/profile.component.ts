import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/authService';
import { getToken } from '../utils/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnDestroy {
  data: any;
  subscription: Subscription;
  
  constructor(private authService: AuthService) {
    const token = getToken();
    this.subscription = this.authService.getProfile(token).subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => console.log(err)
    });
  }
  
  getData() {
    return this.data;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
