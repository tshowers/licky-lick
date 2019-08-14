import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService } from 'licky-services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public router: Router, public loginService: LickyLoginService) { }

  ngOnInit() {
  }

}
