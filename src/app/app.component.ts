import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public barChartOptions: ChartOptions;// = {
    //responsive: false,
  //};
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];

  calculateMaxValue() {
    let chartOptions = {
      scaleOverride: true,
      scaleShowVerticalLines: false,
      maintainAspectRatio:true,
      scaleShowValues:true,
      scaleValuePaddingX:20,
      responsive: true,
      barHeight:200,
      barWidth: 10,
      tooltips: {
        enabled: false
      },
      hover: {
        animationDuration: 0
      },
      plugins: {
        datalabels: {
          display: false,
          backgroundColor: 'white',
          borderColor: 'white',
          borderRadius: 1,
          borderWidth: 0,
          anchor: 'end',
          color: 'black',
          align: 'end',
          offset: -100,
          font: {
            weight: 'normal',
            size: 20
          },
          formatter: Math.round,
          
        }
      },
      animation: {
           onComplete: function () {
               var chartInstance = this.chart,
               ctx = chartInstance.ctx;
               ctx.textAlign = 'center';
               ctx.textBaseline = 'bottom';
               this.data.datasets.forEach(function (dataset, i) {
                   var meta = chartInstance.controller.getDatasetMeta(i);
                   meta.data.forEach(function (bar, index) {
                       var data = dataset.data[index];
                       ctx.fillText(data, bar._model.x, bar._model.y +5);
                   });
               });
           }
 
        },
      pointLabels: {
        display: true
      },
      scales:
      {
        fontColor: '#666',
        xAxes: [{
            display: true,
            barPercentage: 0.40,
            stacked: true,
            color: "transparent",
            ticks: {
              beginAtZero: true,
              fontFamily: "'Roboto', 'Helvetica Neue', sans-serif",
              fontColor: "transparent",
            },
            scaleLabel: {
              display: false
            },
            gridLines: {
              display: true,
              offsetGridLines: true,
              color: "white",
            },
          }],
        yAxes: [{
            barPercentage: 0.90,
            display: true,
            stacked: true,
            gridLines: {
              display: false,
              offsetGridLines: false
            },
            ticks: {
              fontFamily: "'Roboto', 'Helvetica Neue', sans-serif",
              fontSize: 14,
            },
          }]
      },
    };
    
    return chartOptions;
  }

  public barChartData: ChartDataSets[] = 
    [
      {
        data: [200,100,200,200,50,60,30],
        backgroundColor: [
          '#007dc6',
          '#367c2b',
          'rgb(255,100,255)',
          'rgb(255,190,205)',
          '#e62b1e',
        ],
      }
  ];

  constructor() { }

  ngOnInit() {
    this.barChartOptions = this.calculateMaxValue();
  }
}
