import { Component, OnInit } from '@angular/core';
import { LickyLoginService } from 'licky-services';

@Component({
  selector: 'app-news-logout',
  templateUrl: './news-logout.component.html',
  styleUrls: ['./news-logout.component.css']
})
export class NewsLogoutComponent implements OnInit {


  constructor(private _loginService: LickyLoginService) { }

  ngOnInit() {
    this._loginService.signOut();
  }

}
