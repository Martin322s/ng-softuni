import { Component } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent { 
    elements = [
        'Angular Component 1',
        'Angular Component 2',
        'Angular Component 3'
    ];
};