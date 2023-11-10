import { Component } from '@angular/core';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent {
  loggedIn: false | undefined;

  constructor(public navService: NavServiceService) {

  }
}
