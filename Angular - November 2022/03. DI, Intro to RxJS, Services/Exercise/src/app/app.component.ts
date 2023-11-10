import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Exercise';
    counter: number = 0;
    users = [
        {
            name: 'Pesho'
        },
        {
            name: 'Mero'
        }
    ]

    constructor() { }

    addUserClick(nameInput: HTMLInputElement): void {
        const name = nameInput.value;
        this.users = this.users.concat({ name });
        nameInput.value = '';
    }
}
