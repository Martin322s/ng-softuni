import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    getUserById(arg0: any) {
        throw new Error("Method not implemented.");
    }

    constructor(private http: HttpClient) { }

    loadUsers() {
        return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    }

    loadUser(id: number) {
        return this.http.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id);
    }
}