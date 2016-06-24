import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }
    ngOnInit() {
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
    gotoDetail() { 
        /* not implemented yet */
        console.log('get detail');
    }
}

