import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-themes-list',
    templateUrl: './themes-list.component.html',
    styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
    themesList: Theme[] = [];
    isLoading: boolean = true;
    isLogged: boolean | undefined;
    
    constructor(private apiService: ApiService, private userService: UserService) {
        
    }
    
    ngOnInit(): void {
        this.apiService.getThemes().subscribe((themes) => {
            this.themesList = themes;
            this.isLoading = false;
        });

        this.isLogged = this.userService.isLogged;
    }
}