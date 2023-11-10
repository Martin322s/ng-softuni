import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

const customValidator: ValidatorFn = (control: AbstractControl) => {
    return control.value.length > 10 ? { myValidator: true } : null
}

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

    registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.email, customValidator]],
        password: ['', [ Validators.required, Validators.minLength(8)]]
    });

    constructor(private fb: FormBuilder) {

    }

    submitHandler() {

    }
}
