import { Component, OnInit } from '@angular/core';
import { LickyLoginService } from 'licky-services';

@Component({
  selector: 'app-news-logout',
  templateUrl: './news-logout.component.html',
  styleUrls: ['./news-logout.component.css']
})
export class NewsLogoutComponent implements OnInit {

  menuItems: any[] = [
    {
      "link" : "/about",
      "name" : "Home",
    },
    {
      "link" : "/application/login",
      "name" : "Login"
    },
  ]


  constructor(private _loginService: LickyLoginService) { }

  ngOnInit() {
    this._loginService.signOut();
  }

}
