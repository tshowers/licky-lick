import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
