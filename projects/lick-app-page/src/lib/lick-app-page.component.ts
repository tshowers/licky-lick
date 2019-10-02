import { Component, OnInit, OnDestroy, Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Crumb } from 'lick-app-widget-breadcrumb';
import { Subscription } from 'rxjs';
import { User } from 'lick-data';

@Component({
  selector: 'licky-lick-app-page',
  templateUrl: './lick-app-page.component.html',
  styles: []
})
export class LickAppPageComponent implements OnInit, OnDestroy {

  public toggleDisplay = false;
  public diagDisplay = "none";

  public crumbs: Crumb[] = [];
  public pageTitle: string = "Default Title";


  @Input() diagnostics;

  constructor(public router: Router, protected _renderer: Renderer2) {
    this._renderer.addClass(document.body, 'app');
    this._renderer.addClass(document.body, 'sidebar-fixed');
    this._renderer.addClass(document.body, 'aside-menu-off-canvas');
    this._renderer.addClass(document.body, 'aside-menu-hidden');
    this._renderer.addClass(document.body, 'header-fixed');
  }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  public toggleDiagnostic(): void {
    this.diagDisplay = (this.diagDisplay == "none") ? "" : "none";
    this.toggleDisplay = (this.toggleDisplay) ? false : true;
  }

  public onViewProfile() : void {
    this.router.navigate(['application', 'profile'])
  }

  public onSettings() : void {
    this.router.navigate(['application', 'settings'])
  }

  get diagnostic() {
    return this.diagnostics;
  }
}
