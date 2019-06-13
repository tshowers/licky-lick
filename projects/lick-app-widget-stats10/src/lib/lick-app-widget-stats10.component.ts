import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'licky-lick-app-widget-stats10',
  templateUrl: './lick-app-widget-stats10.component.html',
  styles: []
})
export class LickAppWidgetStats10Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats10";

  currentDataDisplay = '';
  pastDataDisplay = 'none';

  @Input() currentButtonText = "Today";
  @Input() pastButtonText = "Yesterday";
  @Input() data1: any[] = [
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://via.placeholder.com/1024x768.png",
      "userName": "Catherine Drake",
      "amount": Math.floor(Math.random() * 1000),
      "shortDescription": "Gravida enim ullamcorper urna elit facilisi habitant quisque viverra integer velit. Nostra, natoque ad interdum mauris faucibus auctor sagittis."
    },
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://via.placeholder.com/1024x768.png",
      "userName": "Kay Tylar",
      "amount": Math.floor(Math.random() * 1000),
      "shortDescription": "Dignissim vulputate est parturient, adipiscing vehicula! Nunc duis justo class at lorem sem velit nullam phasellus nunc."
    },
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://via.placeholder.com/1024x768.png",
      "userName": "Asher Suzanne",
      "amount": Math.floor(Math.random() * 1000),
      "shortDescription": "Primis dolor placerat hendrerit ad ante."
    },
  ];
  @Input() data2: any[] = [
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://via.placeholder.com/1024x768.png",
      "userName": "Theo Carmella",
      "amount": Math.floor(Math.random() * 1000),
      "shortDescription": "Elementum per enim nullam hac."
    },
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://via.placeholder.com/1024x768.png",
      "userName": "Colene Cecil",
      "amount": Math.floor(Math.random() * 1000),
      "shortDescription": "Nascetur diam libero ullamcorper himenaeos conubia? Netus nisl himenaeos nascetur ligula porttitor lorem mollis pharetra consequat ut praesent praesent!"
    },
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://via.placeholder.com/1024x768.png",
      "userName": "Catherin Bridget",
      "amount": Math.floor(Math.random() * 1000),
      "shortDescription": "Felis condimentum magna feugiat inceptos enim et lorem sodales metus sit dignissim sollicitudin."
    },

  ];
  @Input() showMoreLink = "/";
  @Input() router: Router;

  constructor() { }

  ngOnInit() {
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
