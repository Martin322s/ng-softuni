import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NavServiceService } from '../nav-service.service';

interface Post {
    _id: string,
    name: string,
    createdAt: string,
    subscribers: number,
    username: string
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    posts: Post[] = [];

    constructor(
        @Inject(ApiService) private apiService: ApiService, 
        public navService: NavServiceService) { }

    ngOnInit(): void {
        this.apiService.get('themes').subscribe(
            {
                next: (response) => {
                    this.posts = response.map((x: any) => ({
                        _id: x._id,
                        name: x.themeName,
                        createdAt: x.created_at,
                        subscribers: x.subscribers.length,
                        username: x.userId.username
                    }));
                },
                error: (error) => console.log(error)
            }
        );
    }
}
