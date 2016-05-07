import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

import {OnInit} from '@angular/core';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit{
  ngOnInit(){
    this.getHeroes();
  }
  constructor(private heroService: HeroService){}
    
    selectedHero: Hero;
    heroes: Hero[];
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    };
    getHeroes() {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
