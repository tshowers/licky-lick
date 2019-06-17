import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

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
