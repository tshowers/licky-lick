import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.css']
})
export class PrivacyPageComponent implements OnInit {

  menuItems: any[] = [
    {
      "link" : "/about",
      "name" : "Home",
    },
    {
      "link" : "/sign-up",
      "name" : "Sign Up"
    },
    {
      "link" : "/sign-in",
      "name" : "Login"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
