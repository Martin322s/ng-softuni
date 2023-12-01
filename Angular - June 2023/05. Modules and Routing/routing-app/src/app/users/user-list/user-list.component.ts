import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = []
  constructor(private userService: UserServiceService) {

  }

  setUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
}