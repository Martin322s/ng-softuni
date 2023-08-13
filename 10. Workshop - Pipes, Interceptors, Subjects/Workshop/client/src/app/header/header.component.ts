import { Component } from '@angular/core';
import { isAuth } from '../utils/auth';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedIn: boolean = isAuth();
  constructor(public navService: NavServiceService) { }
}
