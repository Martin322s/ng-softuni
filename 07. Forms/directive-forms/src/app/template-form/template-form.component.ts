import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  constructor() {

  }

  submitHandler(form: any) {
    console.log(form.value);
  }
}
