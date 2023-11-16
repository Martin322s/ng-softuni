import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, UserListComponent, HttpClientModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent {
    title = "Application works!";
    appUsers: { name: string; email: string; }[] = [];

    constructor(public userService: UserService) {
        this.appUsers = userService.users;
    }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(users => {
                this.appUsers = users;
            });
    }

    setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement): void {
        this.userService.addNewUser(inputName, inputAge);
        this.appUsers = this.userService.users;
    }
}