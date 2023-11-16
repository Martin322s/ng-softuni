import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { Observable, map } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, UserListComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent {
    title = "Application works!";
    appUsers: { name: string; age: number; }[] = [];

    constructor(public userService: UserService) {
        this.appUsers = userService.users;
    }

    setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement): void {
        this.userService.addNewUser(inputName, inputAge);
        this.appUsers = this.userService.users;
    }
}

const p = new Promise((resolve, reject) => {
    console.log('from promise involved');

    setTimeout(() => {
        resolve(1200);
    }, 4000);
});

p.then((data) => console.log('promise', data));

function int(value: number) {
    return new Observable<number>(observer => {
        // observer.next(1000);
        // observer.next(1001);
        // observer.next(1002);
        let count = 0;

        const interval = setInterval(() => {
            observer.next(count++);
        }, value);

        return () => {
            clearInterval(interval);
        }
    });
}

const stream$ = int(1000).pipe(map((x) => x * 2)); 

stream$.subscribe({
    next: (x) => console.log(x),
    error: () => console.log('error'),
    complete: () => console.log('completed')
});