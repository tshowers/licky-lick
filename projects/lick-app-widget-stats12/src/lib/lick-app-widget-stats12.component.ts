import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-stats12',
  templateUrl: './lick-app-widget-stats12.component.html',
  styles: []
})
export class LickAppWidgetStats12Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats12";
  currentDataDisplay = '';
  pastDataDisplay = 'none';
  @Input() currentButtonText = "Today";
  @Input() pastButtonText = "Yesterday";
  @Input() data1: any[] = [
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "url" : "https://via.placeholder.com/1024x768.png",
      "name" : "Dapibus consectetur",
      "link" : "/",
      "description" : "Orci maecenas class habitant integer amet, accumsan ornare cras eleifend amet lorem vel. Mollis nulla mus molestie luctus tortor potenti.",
      "lastUpdated" : new Date(),
      "status" : "Canceled",
      "userName" : "Eldred Davida",
      "timeStamp" : new Date()
    },
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "url" : "https://via.placeholder.com/1024x768.png",
      "name" : "Donec cras",
      "link" : "/",
      "description" : "Porta sit tincidunt porta posuere varius suspendisse mi nam! Rutrum libero dictumst auctor litora ac nunc torquent fusce dignissim auctor.",
      "lastUpdated" : new Date(),
      "status" : "Open",
      "userName" : "Lissa Keegan",
      "timeStamp" : new Date()
    },
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "url" : "https://via.placeholder.com/1024x768.png",
      "name" : "Ante congue",
      "link" : "/",
      "description" : "Inceptos purus tristique, libero et tellus arcu mattis class euismod tristique ligula. Molestie metus justo est penatibus suspendisse viverra porta",
      "lastUpdated" : new Date(),
      "status" : "In-Active",
      "userName" : "Sadie Renee",
      "timeStamp" : new Date()
    },
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "url" : "https://via.placeholder.com/1024x768.png",
      "name" : "Aliquet netus",
      "link" : "/",
      "description" : "Eget felis praesent adipiscing mattis aliquam. Porta rutrum vehicula fermentum mauris fusce libero taciti varius eget. Purus dui cras aptent.",
      "lastUpdated" : new Date(),
      "status" : "Current",
      "userName" : "Amos Christine",
      "timeStamp" : new Date()
    },
  ];
  @Input() data2: any[] = [
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "url" : "https://via.placeholder.com/1024x768.png",
      "name" : "Aptent pretium",
      "link" : "/",
      "description" : "Orci maecenas class habitant integer amet, accumsan ornare cras eleifend amet lorem vel. Mollis nulla mus molestie luctus tortor potenti.",
      "lastUpdated" : new Date(),
      "status" : "Canceled",
      "userName" : "Jeanie Ricky",
      "timeStamp" : new Date()
    },
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "url" : "https://via.placeholder.com/1024x768.png",
      "name" : "Class tempor",
      "link" : "/",
      "description" : "Porta sit tincidunt porta posuere varius suspendisse mi nam! Rutrum libero dictumst auctor litora ac nunc torquent fusce dignissim auctor.",
      "lastUpdated" : new Date(),
      "status" : "Open",
      "userName" : "Greta Aaren",
      "timeStamp" : new Date()
    },
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "url" : "https://via.placeholder.com/1024x768.png",
      "name" : "Malesuada mus",
      "link" : "/",
      "description" : "Inceptos purus tristique, libero et tellus arcu mattis class euismod tristique ligula. Molestie metus justo est penatibus suspendisse viverra porta",
      "lastUpdated" : new Date(),
      "status" : "In-Active",
      "userName" : "Eleanora Jayde",
      "timeStamp" : new Date()
    },
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "url" : "https://via.placeholder.com/1024x768.png",
      "name" : "Natoque sollicitudin",
      "link" : "/",
      "description" : "Eget felis praesent adipiscing mattis aliquam. Porta rutrum vehicula fermentum mauris fusce libero taciti varius eget. Purus dui cras aptent.",
      "lastUpdated" : new Date(),
      "status" : "Current",
      "userName" : "Sherwood Grover",
      "timeStamp" : new Date()
    },

  ];

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

  showMoreDetails(item: any): void {
    console.log("Show more details " + item);
  }


}
