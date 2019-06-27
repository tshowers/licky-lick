import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService} from 'licky-services';

@Component({
  selector: 'app-news-signup',
  templateUrl: './news-signup.component.html',
  styleUrls: ['./news-signup.component.css']
})
export class NewsSignupComponent implements OnInit {

  constructor(public router: Router, private _loginService: LickyLoginService) { }

  ngOnInit() {
  }

  public onPageEvent(value) : void {
    if(value.type == 'submit') {
      console.log("isSubmit=" + JSON.stringify(value))
      this._loginService.signUpUser(value.emailAddress, value.password, value.firstName, value.lastName, null, this.router, "/application/login")
    }
  }

}
