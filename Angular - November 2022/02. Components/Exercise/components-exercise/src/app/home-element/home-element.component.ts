import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-element',
  templateUrl: './home-element.component.html',
  styleUrls: ['./home-element.component.css']
})
export class HomeElementComponent {
  @Input() personValue!: string;
  @Input() staticString!: string;
}