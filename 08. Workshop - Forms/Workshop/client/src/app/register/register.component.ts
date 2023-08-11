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

    submitHandler(formData: NgForm) {
        console.log(formData.value);
    }

    blurEvent(username: HTMLInputElement) {
        if (username.value === '') {
            this.isEmptyUsername = true;
        }
    }
}
