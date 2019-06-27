import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService} from 'licky-services';

@Component({
  selector: 'app-news-forgot-password',
  templateUrl: './news-forgot-password.component.html',
  styleUrls: ['./news-forgot-password.component.css']
})
export class NewsForgotPasswordComponent implements OnInit {

  constructor(public router: Router, private _loginService: LickyLoginService) { }

  ngOnInit() {
  }

  public onPageEvent(value) : void {
    this._loginService.sendPasswordReset(value, this.router, "/application/login");
  }

}
