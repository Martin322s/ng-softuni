import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    email: ['', [ Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.maxLength(8)]]
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    
  }

  submitHandler(form: any) {

  }
}
