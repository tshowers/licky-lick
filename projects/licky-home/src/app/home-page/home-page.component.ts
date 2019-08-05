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
  descriptionText = "Imagine a system that suggests what customers to call or products to elevate in the sales channel. A method of services that flow seamlessly from one process to another. How much more effective and productive would you be if you didn\'t have to keep putting the same information in over and over? Now imagine a service that tells you what to do based on the data entered?  We\'re building it! Let\'s keep in touch.";

  constructor(public router: Router, private _fds: FirebaseDataService) { }

  ngOnInit() {
  }

  public onPageEvent(value): void {
    this._fds.writeData('/inquiries', {
      emailAddress: value.emailAddress,
    })
    this.headerText = "Thank You! We'll be in touch."
    setTimeout(() =>{ this.headerText = "Intelligent Services", 3000})
  }


}
