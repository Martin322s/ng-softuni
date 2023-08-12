import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

function add(a: number | string, b: number | string): number | string {
    return (a as any) + (b as any);
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Pipes-interceptors';

    obj = {
        // prop1: 'Hello world',
        scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };

    add = add;

    private scores: number[] = [];
    private result = 0;

    getProp(obj: any, propName: string) {
        return obj[propName]
    }

    calcScore(obj: { scores: number[] }) {
        if (this.scores !== this.obj.scores) {
            this.result = obj.scores.reduce((acc, curr) => acc + curr);
            this.scores = obj.scores;
            return this.result;
        } else {
            return this.result;
        }
    }

    addProp() {
        (this.obj as any)['test'] = 500;
    }

    $time = interval(1000).pipe(
        map(() => new Date())
    )
    // myPromise = new Promise((res) => {
    //     setTimeout(() => {
    //         res('Hello from promise')
    //     }, 5000);
    // })
}
