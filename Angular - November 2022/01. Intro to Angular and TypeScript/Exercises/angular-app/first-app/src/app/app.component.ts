import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>First Angular App - {{title}}</h1>'
})
export class AppComponent {
  title = 'Title send via props';
}