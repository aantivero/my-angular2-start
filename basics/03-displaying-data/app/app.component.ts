import {Component} from '@angular/core';
import {Hero} from './hero';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <h2>my favorite hero is: {{myHero.name}}</h2>
    <p>Heroes</p>
    <ul>
        <li *ngFor="let hero of heroes">
            {{hero.name}}
        </li>
    </ul>
    `
})
export class AppComponent {
    title: string;
    heroes: Array<Hero>;
    myHero: Hero;
    
    constructor() {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new Hero(1, 'windstorm'), 
            new Hero(1,'bombasto'), 
            new Hero(1, 'magneta'), 
            new Hero(1,'tornado')];
        this.myHero = this.heroes[0];
    }
 }
