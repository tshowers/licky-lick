import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService } from 'licky-services';

@Component({
  selector: 'app-reset-page',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.css']
})
export class ResetPageComponent implements OnInit {

  constructor(public router: Router, public loginService: LickyLoginService) { }

  ngOnInit() {
  }

}
