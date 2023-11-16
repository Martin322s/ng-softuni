import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent {
  @Input() user: { name: string, email: string } | undefined = undefined;
}
