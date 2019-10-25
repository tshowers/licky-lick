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
  isWidget7 : boolean = false;
  isWidget8 : boolean = false;

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
    this.isWidget7 = false;
    this.isWidget8 = false;
  }

  onForgot() : void {
    this.isWidget1 = false;
    this.isWidget2 = true;
    this.isWidget3 = false;
    this.isWidget4 = false;
    this.isWidget5 = false;
    this.isWidget6 = false;
    this.isWidget7 = false;
    this.isWidget8 = false;
  }

  onLogin() : void {
    this.isWidget1 = false;
    this.isWidget2 = false;
    this.isWidget3 = true;
    this.isWidget4 = false;
    this.isWidget5 = false;
    this.isWidget6 = false;
    this.isWidget7 = false;
    this.isWidget8 = false;
  }

  onLock() : void {
    this.isWidget1 = false;
    this.isWidget2 = false;
    this.isWidget3 = false;
    this.isWidget4 = true;
    this.isWidget5 = false;
    this.isWidget6 = false;
    this.isWidget7 = false;
    this.isWidget8 = false;
  }
  onSignUp() : void {
    this.isWidget1 = false;
    this.isWidget2 = false;
    this.isWidget3 = false;
    this.isWidget4 = false;
    this.isWidget5 = true;
    this.isWidget6 = false;
    this.isWidget7 = false;
    this.isWidget8 = false;
  }

  onLogout() : void {
    this.isWidget1 = false;
    this.isWidget2 = false;
    this.isWidget3 = false;
    this.isWidget4 = false;
    this.isWidget5 = false;
    this.isWidget6 = true;
    this.isWidget7 = false;
    this.isWidget8 = false;
  }

  onNotFound() : void {
    this.isWidget1 = false;
    this.isWidget2 = false;
    this.isWidget3 = false;
    this.isWidget4 = false;
    this.isWidget5 = false;
    this.isWidget6 = false;
    this.isWidget7 = true;
    this.isWidget8 = false;
  }

  onUnderConstruction() : void {
    this.isWidget1 = false;
    this.isWidget2 = false;
    this.isWidget3 = false;
    this.isWidget4 = false;
    this.isWidget5 = false;
    this.isWidget6 = false;
    this.isWidget7 = false;
    this.isWidget8 = true;
  }

  onPageEvent(type) : void {

  }

}
