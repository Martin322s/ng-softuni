import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/authService';
import { Router } from '@angular/router';
import { NavServiceService } from '../nav-service.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    isEmptyUsername: boolean = false;

    constructor(private apiService: AuthService, private router: Router, private navService: NavServiceService) { }

    isValidEmail(email: string): boolean {
        const isValid = /[^@]{6,}@gmail\.(bg|com)/.test(email);
        return isValid;
    }

    usernameLength(username: string): boolean {
        const isValid = username.length < 5;
        return isValid;
    }

    passwordEquality(password: string, passwordTwo: string): boolean {
        if (password === passwordTwo) {
            return true;
        } else {
            return false;
        }
    }

    submitHandler(formData: NgForm) {
        if (Object.values(formData.value).some(x => x === '')) {
            alert('All fields are required!');
        } else {
            this.apiService.registerUser(formData.value)
                .subscribe({
                    next: (res: any) => {
                        localStorage.setItem('user', JSON.stringify({
                            _id: res._id,
                            username: res.username,
                            email: res.email,
                            accessToken: res.accessToken
                        }));
                        this.navService.register();
                        
                        this.router.navigate(['/']);
                    },
                    error: (err: any) => {
                        console.log(err);
                    }
                })
        }
    }

    blurEvent(username: HTMLInputElement) {
        if (username.value === '') {
            this.isEmptyUsername = true;
        }
    }
}
