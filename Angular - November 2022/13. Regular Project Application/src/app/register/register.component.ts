import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) { }

  submitHandler(form: NgForm) {
    if (Object.values(form.value).some(x => x === '')) {
      alert('All fields must be filled correctly!');
    } else {
      this.authService.registerUser(form.value).subscribe({
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
