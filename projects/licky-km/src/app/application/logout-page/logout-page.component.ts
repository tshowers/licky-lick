import { Component, OnInit } from '@angular/core';
import { LickyLoginService } from 'licky-services';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  constructor(public loginService: LickyLoginService) { }

  ngOnInit() {
  }

}
