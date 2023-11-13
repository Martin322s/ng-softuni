import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, UserListComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    users: { name: string; age: number; }[] = [
        { name: 'Peter', age: 22 },
        { name: 'Martin', age: 23 },
        { name: 'Mitko', age: 23 },
        { name: 'Ivan', age: 24 }
    ];

    addNewUser(name: HTMLInputElement, age: HTMLInputElement) {
        const user = { name: name.value, age: Number(age.value) };
        this.users = [...this.users, user];

        name.value = '';
        age.value = '';
    }
}
