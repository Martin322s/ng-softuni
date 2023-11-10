import { Component } from '@angular/core';
import { users } from '../database/data';
import { IUser } from '../interfaces/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor() {
    console.log(users);
  }
}
