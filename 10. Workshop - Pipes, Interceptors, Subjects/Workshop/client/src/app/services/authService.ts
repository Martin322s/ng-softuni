import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {
    apiUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    registerUser(userData: any) {
        const body = JSON.stringify(userData);

        return this.http.post<any>(`${this.apiUrl}/register`, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    getProfile() {
        return this.http.get<any>(`${this.apiUrl}/users/profile`);
    }
}