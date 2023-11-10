import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appFullName]'
})
export class FullNameDirective {
  @Input() username!: any;
  
  constructor() {
    console.log(this.username);
    
  }

}
