import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import { Weight } from './../weight';
import { DataPoint } from './../data-point';
import { WeightService } from './../services/weight.service';


@Component({
  selector: 'weight-table',
  templateUrl: 'app/weight-table/weight-table.component.html',
  //styleUrls: ['app/hero-detail/hero-detail.component.css'],  
  providers: [    
    WeightService,
    MdIconRegistry
  ]
})

export class WeightTableComponent implements OnInit {
  error: any;
  weights: Weight[];
  constructor(
    private weightService: WeightService) {
  }

  

  ngOnInit() {    
    this.weightService
        .getWeights()
        .then(weights => {this.weights = weights;})
        .catch(error => this.error = error); // TODO: Display error message
  }

  
}