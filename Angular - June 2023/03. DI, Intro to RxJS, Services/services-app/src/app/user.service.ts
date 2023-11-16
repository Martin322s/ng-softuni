import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }


    users: { name: string; email: string; }[] = [];

    addNewUser(name: HTMLInputElement, age: HTMLInputElement) {
        name.value = '';
        age.value = '';
    }

    getUsers() {
        return this.http.get<{ name: string; email: string; }[]>('https://jsonplaceholder.typicode.com/users');
    }
}