import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }


    users: { name: string; age: number; }[] = [];

    addNewUser(name: HTMLInputElement, age: HTMLInputElement) {
        const user = { name: name.value, age: Number(age.value) };
        this.users = [...this.users, user];

        name.value = '';
        age.value = '';
    }

    getUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    }
}