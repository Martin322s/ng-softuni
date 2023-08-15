import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { BehaviorSubject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isAuthenticated: Boolean = false;

    constructor(private authService: AuthService, private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                let stat = localStorage.getItem('status');
                if (stat !== null) {
                    let status = JSON.parse(stat)
                    this.authService.isAuthenticatedSubject.next(status);
                    this.authService.isAuthenticated$.subscribe(isAuth => {
                        this.isAuthenticated = isAuth;
                    });
                }
            }
        })

    }

    ngOnInit(): void {

    }

    LoggedIn() {
        return this.isAuthenticated;
    }
}
