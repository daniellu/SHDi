import { Injectable } from '@angular/core';

import { Hero } from './hero';

import { MOCK_HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(){        
        return Promise.resolve(MOCK_HEROES);
    }

    //simulate slow server
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(MOCK_HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number) {
        return this.getHeroes()
             .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

}