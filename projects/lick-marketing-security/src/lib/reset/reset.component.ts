import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService } from 'licky-services';

import { Subscription } from 'rxjs';

@Component({
  selector: 'licky-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit, OnDestroy {

  private _process: Subscription;
  private _error: Subscription;

  public message;

  @Input() logoName = "News";
  @Input() homePageLink = "/";
  @Input() headingText = "16 AHEAD";
  @Input() subText = "Just a few steps away from catching up on all the news.";
  @Input() loginPageLink = "/application/login";
  @Input() router: Router;
  @Input() loginService: LickyLoginService;

  constructor() { }

  ngOnInit() {
    this._process = this.loginService.processMessage.subscribe((message) => {
      this.message = message;
    })

    this._error = this.loginService.errorMessage.subscribe((error) => {
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
    this.loginService.sendPasswordReset(value, this.router, this.loginPageLink);
  }

}
