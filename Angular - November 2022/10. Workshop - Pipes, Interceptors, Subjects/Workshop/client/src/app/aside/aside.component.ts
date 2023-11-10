import { Component, Inject } from '@angular/core';
import { ApiService } from '../api.service';

interface Post {
    _id: string,
    name: string,
    createdAt: string,
    subscribers: number,
    username: string
}

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css']
})
export class AsideComponent {
    posts: Post[] = [];

    constructor(@Inject(ApiService) private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.get('posts', 5).subscribe(
            {
                next: (response) => {
                    this.posts = response.map((x: any) => ({
                        _id: x._id,
                        name: x.themeId.themeName,
                        createdAt: x.created_at,
                        username: x.userId.username
                    }));
                },
                error: (error) => console.log(error)
            }
        );
    }
}
