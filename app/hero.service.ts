import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
   getHeroes() {
       return Promise.resolve(HEROES);
   }
   //see the take it slow
   getHeroesSlowly() {
       return new Promise<Hero[]>(resolve =>
        setTimeout(() => resolve(HEROES), 3000)//3 seconds
       );
   } 
   getHero(id: number){
       return Promise.resolve(HEROES).then(
           heroes => heroes.filter(hero => hero.id === id)[0]
       );
   }
}