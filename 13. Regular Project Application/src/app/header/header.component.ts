import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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

    LoggedIn() {
        return this.isAuthenticated;
    }

    submitHandler() {
        this.authService.logoutUser();
        this.router.navigate(['/']);
        localStorage.clear();
        this.isAuthenticated = false;
    }
}
