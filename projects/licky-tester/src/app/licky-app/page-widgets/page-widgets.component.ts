import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-widgets',
  templateUrl: './page-widgets.component.html',
  styleUrls: ['./page-widgets.component.css']
})
export class PageWidgetsComponent implements OnInit {

  isWidget1 : boolean = true;
  isWidget2 : boolean = false;
  isWidget3 : boolean = false;
  isWidget4 : boolean = false;
  isWidget5 : boolean = false;
  isWidget6 : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMaintenance() : void {
    this.isWidget1 = true;
    this.isWidget2 = false;
    this.isWidget3 = false;
    this.isWidget4 = false;
    this.isWidget5 = false;
    this.isWidget6 = false;
  }

  onForgot() : void {
    this.isWidget1 = false;
    this.isWidget2 = true;
    this.isWidget3 = false;
    this.isWidget4 = false;
    this.isWidget5 = false;
    this.isWidget6 = false;
  }

  onLogin() : void {
    this.isWidget1 = false;
    this.isWidget2 = false;
    this.isWidget3 = true;
    this.isWidget4 = false;
    this.isWidget5 = false;
    this.isWidget6 = false;
  }

  onLock() : void {
    this.isWidget1 = false;
    this.isWidget2 = false;
    this.isWidget3 = false;
    this.isWidget4 = true;
    this.isWidget5 = false;
    this.isWidget6 = false;
  }
  onSignUp() : void {
    this.isWidget1 = false;
    this.isWidget2 = false;
    this.isWidget3 = false;
    this.isWidget4 = false;
    this.isWidget5 = true;
    this.isWidget6 = false;
  }

  onLogout() : void {
    this.isWidget1 = false;
    this.isWidget2 = false;
    this.isWidget3 = false;
    this.isWidget4 = false;
    this.isWidget5 = false;
    this.isWidget6 = true;
  }

  onPageEvent(type) : void {
    console.log("pageEvent = " + type)
  }

}
