import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'components-exercise';

    ngOnInit() {
        console.log('app-created');

    }
}