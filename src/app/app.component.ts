import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public barChartOptions: ChartOptions = {
    responsive: false,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  calculateMaxValue(data) {
    let chartOptions = {
      scaleOverride: true,
      scaleShowVerticalLines: false,
      responsive: true,
      barWidth: 20,
      tooltips: {
        enabled: false
      },
      hover: {
        animationDuration: 0
      },
      plugins: {
        datalabels: {
          display: function (context) {
            // console.log(context);
            if ((context.datasetIndex === 0 && context.dataIndex === 0) || (context.datasetIndex === 0 && context.dataIndex === 1) || (context.datasetIndex === 2 && context.dataIndex === 2) || (context.datasetIndex === 3 && context.dataIndex === 3) || (context.datasetIndex === 4 && context.dataIndex === 4)) {
              return true;
            }
            else {
              return false;
            }
          },
          backgroundColor: 'white',
          borderColor: 'white',
          borderRadius: 1,
          borderWidth: 0,
          anchor: 'end',
          color: 'black',
          align: 'end',
          offset: function (context) {
            if ((context.datasetIndex === 0 && context.dataIndex === 0)) {
              if (context.dataset.data[0] === 0) {
                return '10';
              }
              else {
                return '-15';
              }
            }
            else if ((context.datasetIndex === 0 && context.dataIndex === 1)) {
              if (context.dataset.data[1] === 0) {

                return '10';
              }
              else {
                return '-15';
              }
            }
            else if ((context.datasetIndex === 2 && context.dataIndex === 2)) {
              if (context.dataset.data[2] === 0) {
                return '10';
              }
              else {
                return '-15';
              }
            }
            else if ((context.datasetIndex === 3 && context.dataIndex === 3)) {
              if (context.dataset.data[3] === 0) {
                return '10';
              }
              else {
                return '-15';
              }
            }
            else if ((context.datasetIndex === 4 && context.dataIndex === 4)) {
              if (context.dataset.data[4] === 0) {
                return '10';
              }
              else {
                return '-15';
              }
            }
          },
          font: {
            weight: 'normal',
            size: 20
          },
          formatter: Math.round
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
            barPercentage: 0.90,
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
            barPercentage: 0.40,
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
    let dataObj =
    {
      "planDate": "2018-04-12T00:00:00Z",
      "shiftId": "1",
      "totInProgressAppts": "1",
      "totPendingAppts": "2",
      "totPlannedAppts": "5",
      "totcompletedAppts": "2"
    }
    return chartOptions;
  }

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  constructor() { }

  ngOnInit() {
  }
}
