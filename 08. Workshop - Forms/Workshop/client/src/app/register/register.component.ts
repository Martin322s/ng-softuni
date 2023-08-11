import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    isEmptyUsername: boolean = false;

    constructor() {

    }

    isValidEmail(email: string): boolean {
        console.log(email);
        const isValid = /[^@]{6,}@gmail\.(bg|com)/.test(email);
        console.log(isValid);
        
        return isValid;
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
