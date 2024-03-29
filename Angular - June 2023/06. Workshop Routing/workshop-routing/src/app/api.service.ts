import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';
import { User } from './types/user';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getThemes() {
        const { appUrl } = environment;
        return this.http.get<Theme[]>(`${appUrl}/themes`);
    }

    getTheme(id: string) {
        const { appUrl } = environment;
        return this.http.get<Theme>(`${appUrl}/themes/${id}`);
    }

    getPosts(limit?: number) {
        const { appUrl } = environment;
        const limitFitler = limit ? `?limit=${limit}` : ''
        return this.http.get<Post[]>(`${appUrl}/posts${limitFitler}`);
    }
}