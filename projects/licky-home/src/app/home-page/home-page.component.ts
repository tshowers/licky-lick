import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseDataService} from 'licky-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  headerText = "Intelligent Services";
  descriptionText = "Imagine a system of services that flow seamlessly from one process to another. How much more effective and productive would you be if you didn\'t have to keep putting the same information in over and over? Now imagine a service that tells you what to do base on the data entered? A system that suggests what customers to call, or products to elevate in the sales channel. We\'re building it! Let\'s keep in touch.";

  constructor(public router: Router, private _fds: FirebaseDataService) { }

  ngOnInit() {
  }

  public onPageEvent(value): void {
    this._fds.writeData('/inquiries', {
      emailAddress: value.emailAddress,
    })
    this.headerText = "Thank You! We'll be in touch."
  }


}
