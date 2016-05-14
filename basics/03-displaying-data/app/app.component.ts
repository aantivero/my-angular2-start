import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <h2>my favorite hero is: {{myHero}}</h2>
    <p>Heroes</p>
    <ul>
        <li *ngFor="let hero of heroes">
            {{hero}}
        </li>
    </ul>
    `
})
export class AppComponent {
    title: string;
    heroes: Array<string>;
    myHero: string;
    
    constructor() {
        this.title = 'Tour of Heroes';
        this.heroes = ['windstorm', 'bombasto', 'magneta', 'tornado'];
        this.myHero = this.heroes[0];
    }
 }
