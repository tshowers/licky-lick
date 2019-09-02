import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService, FirebaseDataService } from 'licky-services';
import { Crumb } from 'lick-app-widget-breadcrumb';

@Component({
  selector: 'licky-lick-app-page',
  templateUrl: './lick-app-page.component.html',
  styles: []
})
export class LickAppPageComponent implements OnInit {

  public toggleDisplay = false;
  public diagDisplay = "none";

  public crumbs: Crumb[] = [];
  public pageTitle: string = "Default Title";

  @Input() diagnostics;


  constructor(public router: Router, public loginService: LickyLoginService, public db: FirebaseDataService, protected _renderer: Renderer2) {
    this._renderer.addClass(document.body, 'app');
    this._renderer.addClass(document.body, 'sidebar-fixed');
    this._renderer.addClass(document.body, 'aside-menu-off-canvas');
    this._renderer.addClass(document.body, 'aside-menu-hidden');
    this._renderer.addClass(document.body, 'header-fixed');
  }

  ngOnInit() {
  }

  public toggleDiagnostic(): void {
    this.diagDisplay = (this.diagDisplay == "none") ? "" : "none";
    this.toggleDisplay = (this.toggleDisplay) ? false : true;
  }

  get diagnostic() {
    return this.diagnostics;
  }

}
