import { Component, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  phoneOptions = [
    {
      value: 1,
      content: '+359'
    },
    {
      value: 2,
      content: '+44'
    }
  ];

  buildingOtions = [
    {
      value: 1,
      content: 'Designer'
    }
  ]

  @ViewChild('form') form: any;
  
  constructor() {
  }

  
  submitHandler() {
    console.log(this.form.value);
    this.form.reset();
  }
}
