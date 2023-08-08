import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    posts: [] = [];
    baseUrl: string = 'http://localhost:3000/api';
    constructor(private httpCilent: HttpClient) { }

    get(endpoint: string, limit?: number): Observable<any> {
        if (limit) {
            return this.httpCilent.get(`${this.baseUrl}/${endpoint}?limit=${limit}`);
        } else {
            return this.httpCilent.get(`${this.baseUrl}/${endpoint}`);
        }
    }
}