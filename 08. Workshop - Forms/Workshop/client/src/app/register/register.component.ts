import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    isEmptyUsername: boolean = false;

    constructor() { }

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
        console.log(formData.value);
    }

    blurEvent(username: HTMLInputElement) {
        if (username.value === '') {
            this.isEmptyUsername = true;
        }
    }
}
