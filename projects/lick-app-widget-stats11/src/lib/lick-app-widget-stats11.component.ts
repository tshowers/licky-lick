import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'licky-lick-app-widget-stats11',
  templateUrl: './lick-app-widget-stats11.component.html',
  styles: []
})
export class LickAppWidgetStats11Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats11";
  ctx1: any;
  ctx2: any;
  @Input() chartData1: any[] = [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)];
  @Input() chartLabels1 = ['Active', 'In-active', 'Pending', 'Dormant'];
  @Input() chartData2: any[] = [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)];
  @Input() chartLabels2 = ['Active', 'In-active', 'Pending', 'Dormant'];
  @Input() responsive: boolean = true;
  currentDataDisplay = '';
  pastDataDisplay = 'none';

  @Input() currentButtonText = "Today";
  @Input() pastButtonText = "Yesterday";
  @Input() showMoreLink = "/";
  @Input() showMoreText = "More Details";
  @Input() router: Router;
  setupTimer;

  constructor() { }

  ngOnInit() {
    this.setDataSet();
  }

  private setDataSet(): void {
      this.initChart1();
      this.initChart2();
  }


  private initChart1(): void {
    this.ctx1 = document.getElementById("chart-widget11-1");
    if (this.ctx1) {
      const chart = new Chart(this.ctx1, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: this.chartData1,
            backgroundColor: [
              '#F6BB42',
              '#37BC9B',
              '#F03434',
              '#1BC9E4',
            ]
          }],
          labels: this.chartLabels1
        }
      })
    }
  }

  private initChart2(): void {
    this.ctx2 = document.getElementById("chart-widget11-2");
    if (this.ctx2) {
      const chart = new Chart(this.ctx2, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: this.chartData2,
            backgroundColor: [
              '#F6BB42',
              '#37BC9B',
              '#F03434',
              '#1BC9E4',
            ]
          }],
          labels: this.chartLabels2
        },
      })
    }
  }

  showCurrentData(): void {
    this.currentDataDisplay = '';
    this.pastDataDisplay = 'none';
  }

  showPastData(): void {
    this.currentDataDisplay = 'none';
    this.pastDataDisplay = '';
  }

  showMore(): void {
    this.router.navigate([this.showMoreLink]);
  }
}
