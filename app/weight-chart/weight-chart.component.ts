import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import { Weight } from './../weight';
import { DataPoint } from './../data-point';
import { WeightService } from './../services/weight.service';
import {nvD3} from 'ng2-nvd3';

declare let d3: any;

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
  weights: Weight[];
  constructor(
    private weightService: WeightService) {
  }

  genreateChart(weightData: Weight[]){   
    
    let points : DataPoint[] = this.toPoints(weightData);
    
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
          axisLabel: 'Record Date',
          tickFormat: function(d:any) {
            return d3.time.format('%d-%B-%Y')(new Date(d));;
          },
          showMaxMin: false
        },
        yAxis: {
          axisLabel: 'Weight (Kg)',
          axisLabelDistance: -10
        }
      }
    };
    this.data = [
      {
        values: points,      //values - represents the array of {x,y} data points
        key: 'Daily Weight', //key  - the name of the series.
        color: '#ff7f0e'
      }
    ];

  }

  ngOnInit() {    
    this.weightService
        .getWeights()
        .then(weights => {this.weights = weights; this.genreateChart(this.weights);})
        .catch(error => this.error = error); // TODO: Display error message
  }

  private toPoints(weightData: Weight[]): DataPoint[]{
    return weightData.map(weight => new DataPoint(weight.dateTime, weight.value));

  }
  
}