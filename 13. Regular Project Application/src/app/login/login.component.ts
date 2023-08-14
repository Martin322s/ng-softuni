import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {

  }

  submitHandler(formData: NgForm) {
    if (Object.values(formData.value).some(x => x === '')) {
      alert('All fields must be filled correctly!');
    } else {
      this.authService.loginUser(formData.value).subscribe({
        next: (res) => {
          localStorage.setItem('session', JSON.stringify(res));
          localStorage.setItem('status', 'true');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
}
