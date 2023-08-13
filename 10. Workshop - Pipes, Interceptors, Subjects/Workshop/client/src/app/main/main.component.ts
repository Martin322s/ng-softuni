import { Component } from '@angular/core';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(public navService: NavServiceService) {

  }
}
