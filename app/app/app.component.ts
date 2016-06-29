import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';

import { HeroService }     from './../services/hero.service';
import { HeroesComponent } from './../heroes/heroes.component';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { DashboardComponent } from './../dashboard/dashboard.component';

@RouteConfig([
  {
  path: '/dashboard',
  name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
  },

])


@Component({
  selector: 'app',
  templateUrl : 'app/app/app.component.html',
  styleUrls: ['app/app/app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,    
  ],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
    MdIconRegistry
  ]
})

export class AppComponent {
  title = 'Heros App';
}
