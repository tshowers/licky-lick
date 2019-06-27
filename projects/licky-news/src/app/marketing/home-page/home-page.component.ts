import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      "link" : "/application/sign-up",
      "name" : "Sign Up"
    },
    {
      "link" : "/application/login",
      "name" : "Login"
    },
  ]

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
