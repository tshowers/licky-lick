import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService } from 'licky-services';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-forgot-password',
  templateUrl: './news-forgot-password.component.html',
  styleUrls: ['./news-forgot-password.component.css']
})
export class NewsForgotPasswordComponent implements OnInit, OnDestroy {

  private _process: Subscription;
  private _error: Subscription;

  public message;

  constructor(public router: Router, private _loginService: LickyLoginService) { }

  ngOnInit() {
    this._process = this._loginService.processMessage.subscribe((message) => {
      this.message = message;
    })

    this._error = this._loginService.errorMessage.subscribe((error) => {
      this.message = error;
    })
  }

  ngOnDestroy() {
    if (this._process)
      this._process.unsubscribe();
    if (this._error)
      this._error.unsubscribe();
  }

  public onPageEvent(value): void {
    this._loginService.sendPasswordReset(value, this.router, "/application/login");
  }

}
