import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import { Weight }                from './../weight';
import { WeightService } from './../services/weight.service';

@Component({
  selector: 'weight-chart',
  templateUrl: 'app/weight-chart/weight-chart.component.html',
  //styleUrls: ['app/hero-detail/hero-detail.component.css'],
  providers: [    
    WeightService,
    MdIconRegistry
  ]
})

export class WeightChartComponent implements OnInit {
  error: any;
  navigated = false; // true if navigated here
  constructor(
    private weightService: WeightService) {
  }
  ngOnInit() {
    console.log('instantiate weight chart');
  }
  
}