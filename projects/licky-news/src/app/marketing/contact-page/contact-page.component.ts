import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseDataService} from 'licky-services';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  private _errorSubscription: Subscription;
  errorMessage;

  headingText = "Contact Us"

  constructor(public router: Router, private _fds: FirebaseDataService) { }

  ngOnInit() {
    this._errorSubscription = this._fds.databaseError.subscribe((message) => {
      this.errorMessage = message;
    })
  }

  ngOnDestroy() {
    this._errorSubscription.unsubscribe();
  }

  public onPageEvent(value): void {
    this._fds.writeData('/inquiries', {
      firstName: value.firstName,
      lastName: value.lastName,
      emailAddress: value.emailAddress,
      message: value.message
    })
    this.router.navigate(['about', 'message']);
  }

}
