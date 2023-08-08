import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { IUser } from 'src/app/shared/interfaces';
import { Test } from '../../test';

@Component({
    selector: 'app-user-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class UserListComponent implements OnInit {
    userList: IUser[] = [];

    constructor(
        private userService: UserService,
        private globalLoaderService: GlobalLoaderService,
        private t: Test
    ) {
        this.globalLoaderService.showLoader('Loading users')
        this.userService.loadUsers().subscribe({
            next: (userList) => {
                this.globalLoaderService.hideLoader();
                this.userList = userList;
            }
        });
        
        (window as any).t2 = t;
    }

    ngOnInit(): void {

    }

    loadUsers(): void {
        this.globalLoaderService.showLoader('Loading users')
        this.userService.loadUsers().subscribe({
            next: (userList) => {
                this.globalLoaderService.hideLoader();
                this.userList = userList;
            }
        })
    }
}
