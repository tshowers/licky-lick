import { Component, OnInit, Input } from '@angular/core';
import { LickyLoginService } from 'licky-services';

@Component({
  selector: 'licky-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  @Input() logoName = "News";

  @Input() logoURL = "assets/touch-icon-ipad.png";

  @Input() homePageLink = "/";

  @Input() loginService : LickyLoginService;

  constructor() { }

  ngOnInit() {
    this.loginService.signOut();
  }

}
