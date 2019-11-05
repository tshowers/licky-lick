import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService } from 'licky-services';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(public router: Router, public loginService: LickyLoginService) { }

  ngOnInit() {
  }

}
