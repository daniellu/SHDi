import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


@Component({
  selector: 'heros-container',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'] 

})

export class HeroesComponent  implements OnInit {
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  title: string = 'Tour of Soysauce Heroes';
  subtitle: string = 'My Soysauce Heroes';
  heroes: Hero[] = null;
  selectedHero: Hero = null;
  onSelect(hero: Hero): void { this.selectedHero = hero; }

  ngOnInit(){
    console.log('App Component initialize...');
    this.getHeroesAsync();
  }

  getHeroesAsync() {
    this.heroService.getHeroes().then(herosFromServer => this.heroes = herosFromServer);
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }


}
