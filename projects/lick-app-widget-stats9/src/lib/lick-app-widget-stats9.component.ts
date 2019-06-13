import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'licky-lick-app-widget-stats9',
  templateUrl: './lick-app-widget-stats9.component.html',
  styles: []
})
export class LickAppWidgetStats9Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats9";
  @Input() buttonText1 = "Pending Users";
  @Input() buttonText2 = "New Users";
  @Input() buttonText3 = "Online Users";
  buttonActive1 = "none";
  buttonActive2 = "";
  buttonActive3 = "none";
  @Input() totalCount: number = Math.floor(Math.random() * 1000);
  @Input() subHeadingText = "Aug 2019-Oct 2019";
  private ctxa: any;
  private ctxb: any;
  private ctxc: any;
  @Input() chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  @Input() dataSetLabel = "Per Month";
  @Input() borderColor = "#10b1dd";
  @Input() fill: boolean = true;
  @Input() chartData1: number[] = [
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000)
  ];
  @Input() chartData2: number[] = [
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000)
  ];
  @Input() chartData3: number[] = [
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000)
  ];
  @Input() responsive: boolean = true;
  @Input() borderWidth: number = 1;

  constructor() { }

  ngOnInit() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
  }

  private initChart1(): void {
    this.ctxa = document.getElementById("chart-widget9-1");
    if (this.ctxa) {
      let chart = new Chart(this.ctxa, {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: this.dataSetLabel,
            fill: this.fill,
            borderColor: this.borderColor,
            borderDash: [5, 5],
            data: this.chartData1,
            borderWidth: this.borderWidth
          }]
        },
        options: {
          responsive: this.responsive,
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{
              display: true,
            }]
          }
        }
      })
    }
  }

  private initChart2(): void {
    this.ctxb = document.getElementById("chart-widget9-2");
    if (this.ctxb) {
      let chart = new Chart(this.ctxb, {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: this.dataSetLabel,
            fill: this.fill,
            borderColor: this.borderColor,
            borderDash: [5, 5],
            data: this.chartData2,
            borderWidth: this.borderWidth
          }]
        },
        options: {
          responsive: this.responsive,
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{
              display: true,
            }]
          }
        }
      })
    }
  }

  private initChart3(): void {
    this.ctxc = document.getElementById("chart-widget9-3");
    if (this.ctxc) {
      let chart = new Chart(this.ctxc, {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: this.dataSetLabel,
            fill: this.fill,
            borderColor: this.borderColor,
            borderDash: [5, 5],
            data: this.chartData3,
            borderWidth: this.borderWidth
          }]
        },
        options: {
          responsive: this.responsive,
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{
              display: true,
            }]
          }
        }
      })
    }
  }

  buttonClick1(): void {
    this.buttonActive1 = "";
    this.buttonActive2 = "none";
    this.buttonActive3 = "none";
  }
  buttonClick2(): void {
    this.buttonActive1 = "none";
    this.buttonActive2 = "";
    this.buttonActive3 = "none";
  }
  buttonClick3(): void {
    this.buttonActive1 = "none";
    this.buttonActive2 = "none";
    this.buttonActive3 = "";
  }

}
