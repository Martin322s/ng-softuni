import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    render: boolean = false;
    imgSource: string = '../assets/img.jpg';
    games: { name: string, year: number }[] = [{ name: 'Lol', year: 2009 }, { name: 'WWE 2K17', year: 2016 }]

    renderGames(): void {
        this.render = !this.render;
    }
}