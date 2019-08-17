import { Component, OnInit, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-page',
  templateUrl: './lick-app-page.component.html',
  styles: []
})
export class LickAppPageComponent implements OnInit {

  public toggleDisplay = false;
  public diagDisplay = "none";

  @Input() diagnostics;


  constructor(protected _renderer: Renderer2) {
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
