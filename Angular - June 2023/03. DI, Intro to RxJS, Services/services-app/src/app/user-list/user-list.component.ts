import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListItemComponent } from '../user-list-item/user-list-item.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserListItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() users: { name: string; email: string; }[] = [];
}
