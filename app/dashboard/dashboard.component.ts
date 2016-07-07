import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './../hero';
import { HeroService } from './../services/hero.service';
import { WeightChartComponent } from './../weight-chart/weight-chart.component';


@Component({
    templateUrl: 'app/dashboard/dashboard.component.html',
    //styleUrls: ['dist/dashboard.component.css']
    directives: [WeightChartComponent]

})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this.router.navigate(link);
    }

}

