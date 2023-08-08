import { Component } from '@angular/core';
import { Test } from 'src/app/test';

@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PostListComponent {
  constructor(private t: Test) {
    (window as any).t1 = t;
  }
}
