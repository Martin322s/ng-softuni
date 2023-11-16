import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }

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