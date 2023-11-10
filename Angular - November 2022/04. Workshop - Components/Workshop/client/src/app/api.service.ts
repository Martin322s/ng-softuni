import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpCilent: HttpClient) { }

    loadThemes() {
        return this.httpCilent.get('http://localhost:3000/api/posts?limit=5');
    }
}

