import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: any = {};
  constructor(private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.data;
    console.log(this.user);
    this.activatedRoute.params.subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
}
