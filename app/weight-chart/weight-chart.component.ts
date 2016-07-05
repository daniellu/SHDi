import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import { Weight }                from './../weight';
import { WeightService } from './../services/weight.service';
import {nvD3} from 'ng2-nvd3';

@Component({
  selector: 'weight-chart',
  templateUrl: 'app/weight-chart/weight-chart.component.html',
  //styleUrls: ['app/hero-detail/hero-detail.component.css'],
  directives: [nvD3],
  providers: [    
    WeightService,
    MdIconRegistry
  ]
})

export class WeightChartComponent implements OnInit {
  error: any;
  options : any;
  data: any;
  navigated = false; // true if navigated here
  constructor(
    private weightService: WeightService) {
  }
  ngOnInit() {
    console.log('instantiate weight chart');
    this.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        values: [{x: 1, y: 2}, {x: 2, y: 3}],      //values - represents the array of {x,y} data points
        key: 'Sine Wave', //key  - the name of the series.
        color: '#ff7f0e'
      }
    ];
  }
  
}