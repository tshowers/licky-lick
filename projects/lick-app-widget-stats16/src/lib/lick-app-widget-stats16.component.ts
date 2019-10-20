import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'licky-lick-app-widget-stats16',
  templateUrl: './lick-app-widget-stats16.component.html',
  styles: []
})
export class LickAppWidgetStats16Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats16";
  @Input() subHeadingText = "sub heading";
  @Input() amount = Math.floor(Math.random() * 100000);
  @Input() isCurrency: boolean = true;
  @Input() percentage: number = Math.floor(Math.random() * 100);
  @Input() chartData = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ];
  @Input() chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];

  private ctxa: any;

  constructor() { }

  ngOnInit() {
    this.initChart();
  }
  private initChart(): void {
    this.ctxa = document.getElementById("chart-stat-widget16");
    if (this.ctxa) {
      const chart = new Chart(this.ctxa, {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: [{
            fill: false,
            borderDash: [5, 5],
            data: this.chartData,
          }]
        },
        options: {
          responsive: true,
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
}
