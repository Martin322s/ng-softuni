import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  @Input() users!: { name: string }[];

  constructor(private cdRef: ChangeDetectorRef) {
   this.cdRef.reattach(); 
  }
}