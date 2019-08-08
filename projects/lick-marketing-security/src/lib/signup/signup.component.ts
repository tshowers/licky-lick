import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService} from 'licky-services';

@Component({
  selector: 'licky-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() logoName = "News";
  @Input() homePageLink = "/";
  @Input() headingText = "headerText";
  @Input() subText = "Just one step away from catching up on all the news.";
  @Input() loginLink = "/application/login";

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
